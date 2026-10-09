const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance" , authMiddleware , async(req,res) => {
    const Account = await account.findOne({
        userId : req.userId
    })
    res.json({
        balance: Account.balance
    })
})
router.post("/transfer" , authMiddleware , async(req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { Amount , to} = req.body;
    const fromAccount = await account.findOne({
        userId: req.userId
    }).session(session);
    if(!fromAccount || fromAccount.balance < Amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insuffecient Balance"
        })
    }
    const toAccount = await account.findOne({
        userId : to
    }).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    await account.updateOne({
        userId: req.userId   
    }, {
        $inc: {balance: -Amount}
    }).session(session)
    await account.updateOne({
        userId: to
    },{
        $inc: {balance: Amount}
    }
).session(session)
await session.commitTransaction();
res.json({
    message: "Transfer succesfully"
})
})

module.exports = router;

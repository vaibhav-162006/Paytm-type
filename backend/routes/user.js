const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const router = express.Router();

const SignupSchema =zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName: zod.string(),
    lastName: zod.string() 
})
router.post("/signup" , (req,res)=>{
    const body = req.body;
    const{success} = SignupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs"
        })
    }
    const existingUser = await User.findOne({
        username : req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);
        res.json({
        message: "User created successfully",
        token: token
    })
})
module.exports = router;
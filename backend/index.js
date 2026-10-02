const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") }); require("mongoose").connect(process.env.MONGO_URL).then(() => app.listen(3000)).catch((error) => { console.error("MongoDB connection failed:", error.message); process.exit(1); });

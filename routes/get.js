const express = require("express");
const router = express.Router();
const { mongoDBServerConnect, getMongoDB } = require("../dbHelper");

// connect mongo db
mongoDBServerConnect().catch(console.dir);
let serverVar = getMongoDB();

router.get("/", (req, res) => {
    // res.send(`Hello from port ${port}.`);
    res.render("index", {
        "clientVar": serverVar
    })
});

module.exports = router;
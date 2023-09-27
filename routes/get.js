const express = require("express");
const router = express.Router();
const { client, mongoDBServerConnect, getMongoDB } = require("../dbHelper");

router.get("/", async (req, res) => {
    
    try {
        mongoDBServerConnect().catch(console.dir);
        const serverVar = await getMongoDB();

        res.render("index", { data: {
            "pj": serverVar[0]["project_name"],
            "name1": serverVar[0]["name1"],
            "name2": serverVar[0]["name2"],
            "clientVar": "blah blah"
        }
        })
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }

});

module.exports = router;
const express = require("express");
const app = express();
require("dotenv").config();
const { mongoDBServerConnect, getMongoDB } = require("./dbHelper");
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// connect mongo db
mongoDBServerConnect().catch(console.dir);
getMongoDB();

// json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define routes
app.use("/", require("./routes/get"));
app.use("/post", require("./routes/post"));

app.listen(port, () => {
    console.log("Connected");
});
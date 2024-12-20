const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

const post_router = require("./routes/post_router.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors({
    origin: "*",
}));

app.use("/posts", post_router);

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3002,'217.114.0.104', () => {
    console.log("Server is running on port 3002");
})

console.log()
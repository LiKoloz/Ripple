const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const post_router = require("./routes/post_router.js");

app.use(bodyparser.json());

app.use("/posts", post_router);

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
})

console.log()
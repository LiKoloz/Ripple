const db = require("./DbConnection.js");
const express = require("express");
var bodyparser=require('body-parser');
const app = express();

const user_router = require("./routes/user_router.js");
const post_router = require("./routes/post_router.js");

app.use(bodyparser.json());

app.use("/users", user_router);
app.use("/posts", post_router);

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3000, () => {
    console.log("Server is running on port 3001");
})

console.log()
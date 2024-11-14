const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const user_router = require("./routes/user_routes.js");
const post_router = require("./routes/post_routes.js");

app.use("/users", user_router);
app.use("/posts", post_router);

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3003, () => {    
    console.log("Server is running on port 3003");
})

console.log()

exports.app = app;
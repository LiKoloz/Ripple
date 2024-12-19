const express = require("express");
const cors = require("cors")
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors({
    origin: "*",
}));

const user_router = require("./routes/user_routes.js");
const post_router = require("./routes/post_routes.js");

app.use("/users", user_router);
app.use("/posts", post_router);

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
})

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3003,'localhost', () => {    
    console.log("Server is running on port 3003");
})

console.log()

exports.app = app;
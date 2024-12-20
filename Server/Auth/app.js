const express = require("express");
const cors = require("cors");
var bodyparser=require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({
    origin: "*",
}));

const sign_up_router = require("./routes/sign_up_routes.js");
const sign_in_router = require("./routes/sign_in_routes.js");


app.use("/sign_up", sign_up_router);
app.use("/sign_in", sign_in_router);

app.use((req, res, next) => {
    res.status(404).send("Not found");
})

app.listen(3001, '217.114.0.104',() => {
    console.log("Server is running on port 3001");
})

console.log();

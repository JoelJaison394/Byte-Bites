const express = require("express")

const app = express();
app.use(express.json());
app.use(express.urlencoded());

//Routes imports 

const articlesRoute = require("./routes/articleRoute");


app.use("/api/v1",articlesRoute)

module.exports = app
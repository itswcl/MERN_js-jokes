// import express and set port
const express = require("express");
const app = express()
const PORT = 8080

// middleware
app.use(express.json(), express.urlencoded({extended: true}))

// connect express server with mongoose db
require("./server/config/mongoose.config")

// after built route file
const AllJokeRoutes = require("./server/routes/jokes.route")
AllJokeRoutes(app);


app.listen(PORT, () => `server up on PORT: 8080`)
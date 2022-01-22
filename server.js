// import express and set port
const express = require("express");
const app = express()
const PORT = 8080

// middleware
app.use(express.json(), express.urlencoded({extended: true}))

// connect express server with mongoose db
require("./server/config/mongoose.config")


app.listen(PORT, () => `server up on PORT: 8080`)
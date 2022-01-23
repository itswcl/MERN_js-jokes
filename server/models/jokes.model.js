// import mongoose
const mongoose = require("mongoose")

// create the joke schema (object model)
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, { timestamps: true })

// the Class we making our new object
const Joke = mongoose.model("Joke", JokeSchema)
// export Joke
module.exports = Joke
// import mongoose
const mongoose = require("mongoose")

// create the joke schema (object model)
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup required"],
        minLength: [10, "setup at least 10 characters"]
    }
    ,
    punchline: {
        type: String,
        required: [true, "setup required"],
        minLength: [3, "setup at least 3 characters"]
    }
}, { timestamps: true })

// the Class we making our new object
const Joke = mongoose.model("Joke", JokeSchema)
// export Joke
module.exports = Joke
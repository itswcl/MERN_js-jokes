// import jokes.model.js from models
const Joke = require("../models/jokes.model")

// api CRUD function
module.exports = {
    // CRUD
        // ----------- READ ALL -----------
    findJokes: (req, res) => {
        Joke.find()
            .then(jokes => res.json({jokes: jokes, message: "success"}))
            .catch(err => res.json({message: "Something Wrong", error: err}))
    },


        // ----------- READ One -----------
    findOneJoke: (req, res) => {
        Joke.findById({_id: req.params.id})
            .then(oneJoke => res.json({joke: oneJoke, message: "success"}))
            .catch(err => res.json({message: "Something Wrong", error: err}))
    },


        // ----------- CREATE One -----------
    createNewJoke : (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json({joke: newJoke, message: "success"}))
            .catch(err => res.json({message:"Something Wrong", error: err}))
    },


        // ----------- UPDATE One -----------
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params._id, req.body, {new: true, runValidators: true})
            .then(updateJoke => res.json({joke: updateJoke, message: "success"}))
            .catch(err => res.json({message:"Something Wrong", error:err}))
    },


        // ----------- DELETE One -----------
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params._id)
            .then(result => res.json({message: result}))
            .catch(err => res.json({message:"Something Wrong", error: err}))
    }

}
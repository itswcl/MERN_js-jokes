// import jokes.model.js from models
const Joke = require("../models/jokes.model")

//export all api CRUD function
module.exports = {
    // CRUD
    // ----------- READ ALL -----------
    findJokes: (req, res) => {
        Joke.find()
            .then(jokes => res.json({ jokes: jokes, message: "success" }))
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    },


    // ----------- READ One -----------
    findOneJoke: (req, res) => {
        // we can use below besides _id, could be other attribute
        // Joke.findOne({_id: req.params.id})
        Joke.findById(req.params.id)
            .then(oneJoke => res.json({ joke: oneJoke, message: "success" }))
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    },
    // ----------- READ random one -----------
    randomOneJoke: (req, res) => {
        Joke.find()
            .then(jokes => {
                // random index by the length
                //            always floor number(random 0 - 0.9 * max length)
                const rdmIdx = Math.floor(Math.random() * jokes.length);
                // only show from the random idx element
                res.json({ joke: jokes[rdmIdx], message: "success" })
            })
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    },


    // ----------- CREATE One -----------
    createNewJoke: (req, res) => {
        // Joke.create({ setup: req.body.setup, punchline: req.body.punchline })
        Joke.create(req.body)
            .then(newJoke => res.json({ joke: newJoke, message: "success" }))
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    },


    // ----------- UPDATE One -----------
    updateJoke: (req, res) => {
        // we can use below besides _id, could be other attribute
        // Joke.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updateJoke => res.json({ joke: updateJoke, message: "success" }))
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    },


    // ----------- DELETE One -----------
    deleteJoke: (req, res) => {
        // we can use below besides _id, could be other attribute
        // Joke.deleteOne({_id: req.params.id})
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json({ message: result }))
            .catch(err => res.json({ message: "Something Wrong", error: err }))
    }

}
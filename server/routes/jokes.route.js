// way1 - direct input the controller
const JokeController = require("../controllers/jokes.controller")
// way2 - get the controller function
// const { findJokes, findOneJoke, updateJoke, deleteJoke } = require("../controllers/jokes.controller")


module.exports = app => {
    // way1 get the controller and call
    app.get('/api/jokes', JokeController.findJokes);
    // put before making param input id to fix the error running into id call
    app.get('/api/jokes/random',JokeController.randomOneJoke);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    // way2 - call the function directly
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}
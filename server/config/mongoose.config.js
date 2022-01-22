// import mongoose
const mongoose = require("mongoose");

// connect to mongodb in local
const DB_NAME = "jokes_db"
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(error => console.log("Something went wrong when connecting to the database", err))
const mongoose = require("mongoose");
const uri = "mongodb+srv://Aditya:Easlwu8BKmYEZpMR@cluster0.u0p7auh.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = async()=>{
    
    await mongoose.connect(uri, {
        useNewUrlParser: true, // Use the new URL parser
        useUnifiedTopology: true,

    }).then(()=>{
        console.log("database connected successfully")
    }).catch(()=>{
        console.log("connection problem in database")
    })
}

module.exports = connectToMongo;
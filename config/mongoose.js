const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fragment");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting the mongodb"));

db.once('open',()=>{
    console.log("Connected to the database");
});

module.exports = db;
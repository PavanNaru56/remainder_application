const mongoose = require("mongoose");

const remainderSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : true
    },
    startTime : {
        type : Date
        
    },
    remindTime : {
        type : Date,
        required : true

    }
},{
    timestamps : true
});


const Remainder = mongoose.model('Remainder',remainderSchema);

module.exports = Remainder;
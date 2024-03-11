
const Remainder = require("../model/remainder")
const sets = require("../Remainders/set");
module.exports.remainderController = (req,res) => {

    return res.render('home');
    


}


module.exports.setRemainder = async (req,res) => {
    
    try {
    //console.log(req.body);
    const {title,note,remind_time} = req.body;

    await Remainder.create({
        title : title,
        note : note,
        startTime : new Date(),
        remindTime : remind_time

    });

    const remainders = await Remainder.find({});
     
    if(remainders){
        sets.setRemainders();

    }

    return res.redirect("/");
}
catch(err){
    console.log("Error in storing the mongdb",err);
}
    
    


}
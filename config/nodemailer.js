const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'pavannaru56@gmail.com',
        pass : 'cyre rqao xdqw abzz'
    }
});



module.exports = {
    transporter : transporter
}
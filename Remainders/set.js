const schedule = require("node-schedule");
const notifier = require("node-notifier");
const nodeMailer = require("../config/nodemailer");
const Remainder = require("../model/remainder");

const moment = require("moment");

module.exports.setRemainders = async () => {

    const remainders = await Remainder.find({});

    if(remainders){
        console.log(remainders);

        const reminderTiming = [
            {duration : -5, unit : 'minutes'},
            {duration : -15, unit : 'minutes'},
            {duration : -1, unit : 'hours'},
            {duration : 0, unit : 'minutes'}

        ]
        remainders.forEach((remind) => {
            const remindDate = new Date(remind.remindTime);
            //console.log(someDate);

            reminderTiming.forEach(remains => {
                const someDate = moment(remindDate).add(remains.duration,remains.unit).toDate();
                console.log(someDate);


               

               




                //sends the remainder to the screen
                const job = schedule.scheduleJob('m-job',someDate, function(){

                     //setup node mailer to send the mails
                     nodeMailer.transporter.sendMail({
                        from : 'pavannaru56@gmail.com',
                        to : 'pavannaru56@gmail.com',
                        subject : remind.title,
                        text : remind.note

                     },(err,info) => {
                        if(err){
                            console.log("error in sending the mail",err);
                            return;
                        }
                        console.log("Message sent",info);
                        return;
                     })



                    notifier.notify({
                        title : remind.title,
                        message : remind.note,
                    });
                    this.cancel();
                    
                })



            })

            



         });
    }    
}

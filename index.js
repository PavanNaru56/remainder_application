const express = require("express");

const port = 8000;

const app = express();

const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser")
const db = require("./config/mongoose");
const schedule = require("node-schedule");
const notifier = require("node-notifier");

const remindSet = require("./Remainders/set")
app.use(express.static('./assets'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(expressLayouts);

app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

app.set("view engine",'ejs');
app.set("views","./views");


app.use("/",require("./routes"));




app.listen(port,(err)=> {
    if(err){
        console.log("error in connection port");
    }
    console.log("port successfully connected");
})
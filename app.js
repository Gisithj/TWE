require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require("path")


const app = express();

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')))

app.get("/",function(req,res){
    res.render("index");
})

app.get("/services",function(req,res){
    res.render("services");
})
app.get("/about-us",function(req,res){
    res.render("about-us",{
        activation:'active'
    });
})
app.get("/portfolio",function(req,res){
    res.render("portfolio");
})
app.get("/contact-us",function(req,res){
    res.render("contact-us");
})
app.get("/quote-request",function(req,res){
    res.render("quote-request");
  })

app.get("/ravindu&ravindu",function(req,res){
    res.render("ravindu&ravindu");
})

app.post("/contact-us",function(req,res){

    var formData = req.body;
    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.MAIL,
            pass:process.env.PASSWORD,
        },
        tls:{
            rejectUnauthorized:false,
        }

    });

    const mailOptions={
        from:"test.nodemailer00@gmail.com",
        to:"gisithjayawardena@yahoo.com",
        subject:formData.subject,
        replyTo:formData.email,
        html:"Name : "+formData.name+"<br>Email : "+formData.email+"<br>Message : "+formData.message,
        
         
    }
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log("Mail sent");
        }
    })
    res.redirect("/");
    console.log("done");


})
app.post("/quote-request",function(req,res){

    const formData = req.body;
    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.MAIL,
            pass:process.env.PASSWORD,
        },
        tls:{
            rejectUnauthorized:false,
        }
    });
    
    if(formData.action==="wedding"){

        var mailOptions={
            from:"test.nodemailer00@gmail.com",
            to:"gisithjayawardena@yahoo.com",
            subject:formData.bName+" & "+formData.gName,
            replyTo:formData.email,
            html:"Bride's name : "+formData.bName+
            "<br>Groom's Name : "+formData.gName+
            "<br>Email : "+formData.email+
            "<br>Wedding Date : "+formData.wDate+
            "<br>Time : "+formData.time+  
            "<br>Location : "+formData.location+                       
            "<br>Type : "+formData.type+                       
            "<br>No of Gues : "+formData.nog+                       
            "<br>Makeup Artist : "+formData.makeupArtist+                       
            "<br>HOW DID YOUR HEAR ABOUT US : "+formData.aboutUs+                       
            "<br>Message : "+formData.message,                     
        }

    }else if(formData.action==="engagement"){
        
        var mailOptions={
            from:"test.nodemailer00@gmail.com",
            to:"gisithjayawardena@yahoo.com",
            subject:formData.bName+" & "+formData.gName,
            replyTo:formData.email,
            html:"Bride's name : "+formData.bName+
            "<br>Groom's Name : "+formData.gName+ 
            "<br>Message : "+formData.message,                         
        }
        
    }else if(formData.action==="casual"){
        
        var mailOptions={
            from:"test.nodemailer00@gmail.com",
            to:"gisithjayawardena@yahoo.com",
            subject:formData.bName+" & "+formData.gName,
            replyTo:formData.email,
            html:"Bride's name : "+formData.bName+
            "<br>Groom's Name : "+formData.gName+
            "<br>Email : "+formData.email+
            "<br>Wedding Date : "+formData.wDate+
            "<br>Message : "+formData.message,                      
        }
        
    }

    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log("Mail sent");
        }
    })
})





app.listen(3000,function(){
    console.log("Server running on port 3000");
})


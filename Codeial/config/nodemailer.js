const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const { realpath } = require('fs');

let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    auth:{
        user:'shubhgupta955936@gmail.com',
        pass:'SHUBHAM2@'
    }
});

let renderTemplate = (data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log('Error in rendering Template',err);return ;}
            mailHTML = template;
        }
    )
    return mailHTML;
}

module.exports = {
    transporter:transporter,
    renderTemplate:renderTemplate
}
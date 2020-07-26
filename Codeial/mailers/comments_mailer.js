const nodeMailer = require('../config/nodemailer');

// this is another way of exporting a methide

exports.newComment =(comment) => {
    // console.log('inside newComment mailer');
    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');


    nodeMailer.transporter.sendMail({
        from:'shubhgupta955936@gmail.com',
        to:comment.user.email,
        subject:"New Comment Published!",
        // html:'<h1>Yup, your comment is now published</h1>'
        html:htmlString
    }, (err,info) => {
        if(err){
            console.log("Error in sending mails",err);
            return;
        }
        console.log('message sent',info);
        return;
    });
}
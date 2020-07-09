
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeialDevelopment');
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error on connecting databse"));
db.once('open',function(){
    console.log("We are connected");
});
module.exports = db;
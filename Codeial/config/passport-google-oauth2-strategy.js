const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
    clientID:'279722398344-nter1qemuulpttb04jirhal42rflnvqh.apps.googleusercontent.com',
    clientSecret:'w8Cl_PXHaDaRxSYRx_pOzjfE',
    callbackURL:'http://localhost:7000/users/auth/google/callback'
},function(accessToken,refreshToken,profile,done){
    // find a user
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
        if(err){
            console.log('error in google-passport-strategy',err);
            return;
        }
        console.log(profile);
        if(user){
            // if found then set the user as req.user
            return done(null,user);
        }else{
            // if not found then create the user and set it as req.user
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex')
            },function(err,user){
                if(err){
                    console.log('error in creating user google-passport-strategy',err);
                    return;
                }  
                return done(null,user);
            })
        }
    });
    

}

));

module.exports = passport;
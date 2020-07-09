const User = require('../models/user');

module.exports.profile=function(req,res){
   // return res.end('<h1>Profile Page/Codeial</h1>');
   return res.render('user_profile',{
      title:"Profile Page"
   });
}
// rendering signup pAGE TO BROWSER

module.exports.signUp = function(req,res){

   if(req.isAuthenticated()){
     return res.redirect('/users/profile');
   }
   return res.render('user_sign_up',{
      title:"Codeial | Sign Up"
   });
}

// rendering the signIn page

module.exports.signIn = function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   }

   return res.render('user_sign_in',{
      title:"Codeial | Sign In"
   });
}


// get sign up data
module.exports.create=function(req,res){
      if(req.body.password!=req.body.confirm_password){
         return res.redirect('back');
      }

      User.findOne({email:req.body.email},function(err,user){
         if(err){
            console.log("Error in finding user in siginup");
            return
         }
         if(!user){
            User.create(req.body,function(err,user){
               if(err){
                  console.log("Error in creating user in siginup");
                   return;
                  }
               return res.redirect('/users/sign-in') 
            });
         } else{
            return res.redirect('back');
         }
      });
}
// get sign in data and create session for sign in
module.exports.createSession = function(req,res){
   
   return res.redirect('/');

}

module.exports.destroySession = function(req,res){
   req.logout();
   return res.redirect('/');
}
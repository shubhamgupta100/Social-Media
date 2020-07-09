module.exports.profile=function(req,res){
   // return res.end('<h1>Profile Page/Codeial</h1>');
   return res.render('user_profile',{
      title:"Profile Page"
   });
}
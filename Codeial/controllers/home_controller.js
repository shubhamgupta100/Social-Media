const Post = require('../models/post');
const User = require('../models/user');
// module.exports.home=function(req,res){
//     // return res.end("<h1>Express is up for codeial</h1>");
//     // Post.find({},function(err,posts){
//     //     return res.render('home',{
//     //         title:"Codeial | Home",
//     //         posts:posts
//     //     });  
//     // });
//     // populate the user of each post
//     Post.find({})
//     .populate('user')
//     .populate({
//         path:'comments',
//         populate:{
//             path:'user'
//         }
//     })
//     .exec(function(err,posts){
//         User.find({},function(err,user){
//             return res.render('home',{
//                 title:"Codeial | Home",
//                 posts:posts,
//                 all_user:user
//             });
//         });
      
//     });
// }

// Bu using async and await

module.exports.home = async function(req,res){

    try{
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        });
        let users = await User.find({});
        return res.render('home',{
            title:"Codeial | Home",
            posts:posts,
            all_user:users
        });

    }catch(err) {
            console.log("Error",err);
            return;
    }  
}
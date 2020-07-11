{
    // method to submit the form data for new post using AJAX
    let createPost = function(){
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostForm.serialize(),
                success:function(data){
                        let newPost = newPostDom(data.data.post);
                        $('#post-list-container>ul').prepend(newPost);
                        deletePost($(' .delete-post-button',newPost))
                     // call the create comment class
                    // new PostComments(data.data.post._id);

                    new Noty({
                        theme: 'relax',
                        text: "Post published!",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                },error:function(error){
                    console.log(error.responseText);
                }

            })
        })
    }
 

    // method to create post in dom
    let newPostDom = function(post){
        return $(`<li id="post-${post._id}">
        <p>
           
            <small>
                <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
            </small>
            
            ${post.content}
            <br>
            ${post.user.name}
    
        </p>
    
        <div class="post-comments">
          
            <form action="comments/create" method="POST">
                <input type="text" name="content" placeholder="Type here comment..." required>
                <input type="hidden" name="post" value="${post._id}">
                <input type="submit" value="Add comment">
    
            </form>
    

    
            <div class="post-comments-list">
                <ul id="post-comments-${post._id}">
                    
    
                </ul>
    
            </div>
    
        </div>
    </li>`)
    }

    // methode to dlt a post from dom

    let deletePost = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                    $(`#post-${data.data.post_id}`).remove();
                     new Noty({
                        theme: 'relax',
                        text: "Post Deleted",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show()

                },error:function(error){
                    console.log(error,responseText);
                }
            })
        });
    }


    createPost();
    
}
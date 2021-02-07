import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    return (
        <div className={p.content}>
            <div>
                My posts
            </div>
            <textarea name="" id="" cols="100" rows="3"></textarea>
            <button>Add post</button>
            <div className={p.posts}>
                <Post message='Hi, how are you?' likesCount ='5' />
                <Post message="It's my first post" likeCount = '15'  />

            </div>
        </div>


    )
}

export default MyPosts;

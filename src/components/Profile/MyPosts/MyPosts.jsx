import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post message={p.message} likesCount={p.likesCount}/>
    })

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea name="" id="" cols="100" rows="3"></textarea>
            </div>
            <div>
            <button onClick={ () => {alert('hey')}}>Add post</button>
            </div>
            <div className={s.posts}>

                {postsElements}


            </div>
        </div>


    )
}

export default MyPosts;

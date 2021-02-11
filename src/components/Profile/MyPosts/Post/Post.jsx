import React from 'react';
import p from './Post.module.css'

const Post = (props) => {

    return (
        <div className={p.item}>
            <img
                src="https://cdn23.img.ria.ru/images/148839/96/1488399659_0:0:960:960_600x0_80_0_1_e38b72053fffa5d3d7e82d2fe116f0b3.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>

        </div>


    )
}

export default Post;

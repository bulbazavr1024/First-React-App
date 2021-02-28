import React from 'react';
import s from './News.module.css'

const News = (props) => {
    return (
        <div className={s.price}>
            <div>bitcoin = {props.bitcoin}</div>
            <div>ethereum = {props.ethereum}</div>
            <div>pangolin = {props.pangolin}</div>
        </div>
    )

}

export default News

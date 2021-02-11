import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <div>
                    <img
                        src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100"
                        alt=""/>
                </div>
                <div className={s.description_block}>
                    ava + description
                </div>
            </div>
        </div>

    )

}

export default ProfileInfo

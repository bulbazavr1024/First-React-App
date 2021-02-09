import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Sergey
                    </div>
                    <div className={s.dialog}>
                        Pavel
                    </div>
                    <div className={s.dialog}>
                        Anna
                    </div>
                    <div className={s.dialog}>
                        Ivan
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>



                </div>
                <div className={s.messages}>
                    <div className="message">Hi</div>
                    <div className="message">How are you?</div>
                    <div className="message">Yo</div>
                </div>
            </div>
        </div>

    )

}

export default Dialogs;

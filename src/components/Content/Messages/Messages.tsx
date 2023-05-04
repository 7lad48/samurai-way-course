import React from 'react';
import styles from './Message.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props:any) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={`${styles.dialog} ${styles.active}`}>{props.name}</NavLink>
    )
}
const Message = (props: any) => {
    return <div className={styles.message}>{props.message}</div>
}
const Messages = (props:any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Dimych' id={1}/>
                <DialogItem name='Valera' id={2}/>
            </div>
            <div className={styles.messages}>
                <Message message='asdasdasd' />
                <Message message='aasdasdsddsgsdfg' />
            </div>
        </div>
    );
}
export default Messages;
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
    let dialogsUsersData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Vasya'},
    ];
    let dialogsMessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo-yo'},
        {id: 4, message: 'Hi-hi'},
    ];
    const users = dialogsUsersData.map(user => <DialogItem name={user.name} id={user.id}/>);
    const messages = dialogsMessagesData.map(message => <Message message={message.message} id={message.id}/>);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{users}</div>
            <div className={styles.messages}>{messages}</div>
        </div>
    );
}
export default Messages;
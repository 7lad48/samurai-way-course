import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css'
import {DialogsPageType} from '../../../redux/state'

const Dialogs: React.FC<DialogsPageType> = ({
                                                dialogsUsersData,
                                                dialogsMessagesData,
                                            }) => {

    const users = dialogsUsersData.map(user => <DialogItem name={user.name} id={user.id}/>);
    const messages = dialogsMessagesData.map(message => <Message message={message.message} id={message.id}/>);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{users}</div>
            <div className={styles.messages}>{messages}</div>
        </div>
    );
}
export default Dialogs;
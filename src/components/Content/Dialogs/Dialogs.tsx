import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css'
import {MessagesType, UsersType} from "../../../redux/dialogsReducer";

type DialogsPageType = {
    onClickButtonHandler: () => void
    onChangeMessage: (newMessage: string) => void
    updatedMessage: string
    dialogsUsersData: UsersType[]
    dialogsMessagesData: MessagesType[]
}

const Dialogs: React.FC<DialogsPageType> = ({
                                                onClickButtonHandler,
                                                onChangeMessage,
                                                updatedMessage,
                                                dialogsMessagesData,
                                                dialogsUsersData
                                            }) => {

    const users = dialogsUsersData.map(user => <DialogItem name={user.name} id={user.id} key={user.id}/>);
    const messages = dialogsMessagesData.map(message => <Message message={message.message} id={message.id}
                                                                 key={message.id}/>);
    const onChangeTypedMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeMessage(e.currentTarget.value);
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{users}</div>
            <div className={styles.messages}>
                {messages}
                <textarea onChange={onChangeTypedMessage} value={updatedMessage} cols={30} rows={4}></textarea>
                <div>
                    <button onClick={onClickButtonHandler}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;
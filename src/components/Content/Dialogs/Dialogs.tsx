import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css'
import {DialogsPropsTypes} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsTypes> = ({
                                                  dialogsPage,
                                                  onChangeMessage,
                                                  onClickSendTypedMsg,

                                              }) => {

    const users = dialogsPage.dialogsUsersData.map(user => <DialogItem name={user.name} id={user.id} key={user.id}/>);
    const messages = dialogsPage.dialogsMessagesData.map(message => <Message message={message.message} id={message.id}
                                                                             key={message.id}/>);
    const onChangeTypedMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeMessage(e.currentTarget.value);
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{users}</div>
            <div className={styles.messages}>
                {messages}
                <textarea onChange={onChangeTypedMessage} value={dialogsPage.typedMessage} cols={30}
                          rows={4}></textarea>
                <div>
                    <button onClick={onClickSendTypedMsg}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;
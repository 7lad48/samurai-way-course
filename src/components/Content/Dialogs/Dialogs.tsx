import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css'
import {DialogsPageType, dispatchType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from '../../../redux/state'

const Dialogs: React.FC<DialogsPageType & dispatchType> = ({
                                                               dialogsUsersData,
                                                               dialogsMessagesData,
                                                               typedMessage,
                                                               dispatch
                                                           }) => {

    const users = dialogsUsersData.map(user => <DialogItem name={user.name} id={user.id} key={user.id}/>);
    const messages = dialogsMessagesData.map(message => <Message message={message.message} id={message.id}
                                                                 key={message.id}/>);
    const onChangeTypedMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateTypedDialogTextAC(e.currentTarget.value));
    }
    const onClickSendTypedMsg = () => {
        dispatch(sendTypedDialogMsgAC());
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{users}</div>
            <div className={styles.messages}>
                {messages}
                <textarea onChange={onChangeTypedMessage} value={typedMessage} cols={30} rows={4}></textarea>
                <div>
                    <button onClick={onClickSendTypedMsg}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;
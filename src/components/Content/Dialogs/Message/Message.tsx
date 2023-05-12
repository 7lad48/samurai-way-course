import React from 'react';
import { MessagesType } from '../../../../redux/state';
import styles from "../Dialogs.module.css";

const Message: React.FC<MessagesType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message;
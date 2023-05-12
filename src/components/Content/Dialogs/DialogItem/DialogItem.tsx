import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Dialogs.module.css";
import {UsersType} from "../../../../redux/state";

const DialogItem: React.FC<UsersType> = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={`${styles.dialog} ${styles.active}`}>{props.name}</NavLink>
    )
}

export default DialogItem;
import React, {ChangeEvent} from 'react';
import {dispatchType} from '../../../redux/state'
import {DialogsPageContainerType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer: React.FC<DialogsPageContainerType & dispatchType> = ({
                                                                                 dialogsUsersData,
                                                                                 dialogsMessagesData,
                                                                                 typedMessage,
                                                                                 dispatch
                                                                             }) => {
    const onChangeTypedMessage = (newMessage: string) => {
        dispatch(updateTypedDialogTextAC(newMessage));
    }
    const onClickSendTypedMsg = () => {
        dispatch(sendTypedDialogMsgAC());
    }
    return <Dialogs
            onClickButtonHandler={onClickSendTypedMsg}
            onChangeMessage={onChangeTypedMessage}
            updatedMessage={typedMessage}
            dialogsUsersData={dialogsUsersData}
            dialogsMessagesData={dialogsMessagesData}
    />
}
export default DialogsContainer;
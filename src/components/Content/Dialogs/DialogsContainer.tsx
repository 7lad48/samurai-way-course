import {DialogsPageContainerType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageContainerType
}
type mapDispatchToPropsType = {
    onChangeMessage: (newMessage: string) => void,
    onClickSendTypedMsg: () => void
}

export type DialogsPropsTypes = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogs,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         onChangeMessage: (newMessage: string) => {
//         dispatch(updateTypedDialogTextAC(newMessage));
//         },
//         onClickSendTypedMsg: () => {
//         dispatch(sendTypedDialogMsgAC());
//         },
//     }
// }
const actionCreators = {
        onChangeMessage: updateTypedDialogTextAC,
        onClickSendTypedMsg: sendTypedDialogMsgAC,
}
const DialogsContainer = connect(mapStateToProps, actionCreators)(Dialogs)

export default DialogsContainer;
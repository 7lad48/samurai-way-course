import {DialogsPageContainerType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogsPageContainerType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    onChangeMessage: (newMessage: string) => void,
    onClickSendTypedMsg: () => void
}

export type DialogsPropsTypes = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogs,
        isAuth: state.auth.isAuth
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

export default WithAuthRedirect(DialogsContainer)
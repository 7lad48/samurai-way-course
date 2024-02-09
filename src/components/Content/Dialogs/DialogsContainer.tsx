import {DialogsPageContainerType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

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
export default compose<ComponentType>(
    connect(mapStateToProps, actionCreators),
    WithAuthRedirect
)(Dialogs)
//import {DialogsPageContainerType, sendTypedDialogMsgAC, updateTypedDialogTextAC} from "../../../redux/dialogsReducer";
import {UsersC} from "./UsersC";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../../redux/usersReducer";


type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsTypes = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;
import {addPostAC, ProfilePostsContainerType, updateNewPostTextAC} from "../../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../../../redux/store";

type mapStateToPropsType = {
    profilePage: ProfilePostsContainerType
}
type mapDispatchToPropsType = {
    addPostButtonHandler: () => void
    onChangePost: (text: string) => void
}
export type PostsTypes = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profilePage: state.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPostButtonHandler: () => {
        dispatch(addPostAC());
        },
        onChangePost: (text: string) => {
        dispatch(updateNewPostTextAC(text));
        },
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
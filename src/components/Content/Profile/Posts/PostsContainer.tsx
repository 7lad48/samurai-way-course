import React from "react";
import Post from "./Post/Post";
import {dispatchType} from "../../../../redux/state";
import {addPostAC, ProfilePostsContainerType, updateNewPostTextAC} from "../../../../redux/profileReducer";
import Posts from "./Posts";


const PostsContainer: React.FC<ProfilePostsContainerType & dispatchType> = ({
                                                                                postsData,
                                                                                newPostText,
                                                                                dispatch,
                                                                            }) => {



    const addPostButtonHandler = () => {
        dispatch(addPostAC());
    }
    const onChangePost = (text: string) => {
        dispatch(updateNewPostTextAC(text));
    }
    return <Posts
        postsData={postsData}
        addPostButtonHandler={addPostButtonHandler}
        onChangePost={onChangePost}
        newPostText={newPostText}
    />
}

export default PostsContainer;
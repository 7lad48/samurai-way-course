import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {ProfilePostsType, dispatchType} from "../../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profileReducer";

const Posts: React.FC<ProfilePostsType & dispatchType> = ({
                                                                                     postsData,
                                                                                     newPostText,
                                                                                     dispatch,
                                                                                 }) => {

    const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                              key={post.id}/>)

    const addPostButtonHandler = () => {
            dispatch(addPostAC());
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //updateNewPostText(e.currentTarget.value);
        dispatch(updateNewPostTextAC(e.currentTarget.value));
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea value={newPostText} onChange={onChangePost}/>
                </div>
                <div>
                    <button onClick={addPostButtonHandler}>Добавить</button>
                </div>
            </div>
            <div className={styles.postsWrapper}>{posts}</div>

        </div>
    );
}

export default Posts;
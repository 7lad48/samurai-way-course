import React, {ChangeEvent, RefObject, useRef} from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {ProfilePostsType, addPostType, updateNewPostTextType} from "../../../../redux/state";

const Posts: React.FC<ProfilePostsType & addPostType & updateNewPostTextType> = ({
                                                                                     postsData,
                                                                                     newPostText,
                                                                                     addPost,
                                                                                     updateNewPostText,
                                                                                 }) => {

    const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                              key={post.id}/>)

    const addPostButtonHandler = () => {
            addPost();
    }
    const onChahngePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea value={newPostText} onChange={onChahngePost}/>
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
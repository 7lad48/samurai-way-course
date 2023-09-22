import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {PostsTypes} from "./PostsContainer";

const Posts: React.FC<PostsTypes> = ({
                                         profilePage,
                                         addPostButtonHandler,
                                         onChangePost
                                           }) => {
    const posts = profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                              key={post.id}/>)
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangePost(e.currentTarget.value)
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea value={profilePage.newPostText} onChange={onChangePostHandler}/>
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
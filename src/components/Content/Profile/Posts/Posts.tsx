import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css"
import {PostType} from "../../../../redux/profileReducer";
import Post from "./Post/Post";

type ProfilePostsType = {
    postsData: PostType[]
    addPostButtonHandler: () => void
    onChangePost: (text: string) => void
    newPostText: string
}

const Posts: React.FC<ProfilePostsType> = ({
                                               postsData,
                                               addPostButtonHandler,
                                               onChangePost,
                                               newPostText
                                           }) => {
    const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}
                                              key={post.id}/>)
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangePost(e.currentTarget.value)
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea value={newPostText} onChange={onChangePostHandler}/>
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
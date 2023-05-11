import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import { PostType } from "./Post/Post";

const Posts = () => {
    const postsData: Array<PostType> = [
        {id: '1', message: "Message 1 lalala", likesCount: 2},
        {id: '2', message: "Message 2 bybyby", likesCount: 11},
        {id: '3', message: "Message 3 tralala", likesCount: 3},
        {id: '4', message: "Messagessdada", likesCount: 4},
    ];
    const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить</button>
                </div>
            </div>
            <div className={styles.postsWrapper}>{posts}</div>

        </div>
    );
}

export default Posts;
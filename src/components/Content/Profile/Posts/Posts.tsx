import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {ProfilePostsType} from "../../../../redux/state";

const Posts: React.FC<ProfilePostsType> = ({
                                               postsData
                                           }) => {

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
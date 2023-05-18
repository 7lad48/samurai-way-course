import React, {RefObject, useRef} from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {ProfilePostsType, addPost} from "../../../../redux/state";

const Posts: React.FC<ProfilePostsType & addPost> = ({
                                                postsData,
                                                addPost,
                                           }) => {

    const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)
    const newPostElement = useRef<HTMLTextAreaElement>(null);
    const addPostButtonHandler = () => {
        if(newPostElement.current !== null) {
            addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.addRow}>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
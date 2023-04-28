import React from "react";
import posts from "./Posts.module.css"
import Post from "./Post/Post";
import { PostType } from "./Post/Post";

const Posts = () => {
    const postsData: Array<PostType> = [
        {message: "Message 1 lalala", likesCount: 2},
        {message: "Message 2", likesCount: 1},
        {message: "Message 333 tralala", likesCount: 4},
    ];
    return (
        <div className={posts.wrapper}>

            <div className={posts.addRow}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить</button>
                </div>
            </div>
            <div className={posts.postsWrapper}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>

        </div>
    );
}

export default Posts;
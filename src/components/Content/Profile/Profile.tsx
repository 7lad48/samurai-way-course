import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {ProfilePostsType, addPostType, updateNewPostTextType} from "../../../redux/state";

const Profile: React.FC<ProfilePostsType & addPostType & updateNewPostTextType> = (posts) => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <Posts {...posts} addPost={posts.addPost} updateNewPostText={posts.updateNewPostText}/>
        </section>
    );
}

export default Profile;
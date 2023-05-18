import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {ProfilePostsType, addPost} from "../../../redux/state";

const Profile: React.FC<ProfilePostsType & addPost> = (posts) => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <Posts {...posts} addPost={addPost}/>
        </section>
    );
}

export default Profile;
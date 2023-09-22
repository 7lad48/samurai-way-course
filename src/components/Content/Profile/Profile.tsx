import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <PostsContainer />
        </section>
    );
}

export default Profile;
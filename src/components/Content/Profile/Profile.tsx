import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <Posts />
        </section>
    );
}

export default Profile;
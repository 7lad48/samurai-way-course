import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {ProfilePostsType} from "../../../redux/state";

const Profile: React.FC<ProfilePostsType> = (posts) => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <Posts {...posts}/>
        </section>
    );
}

export default Profile;
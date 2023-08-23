import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {dispatchType, ProfilePostsType} from "../../../redux/state";

const Profile: React.FC<ProfilePostsType & dispatchType> = (props) => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <Posts {...props}/>
        </section>
    );
}

export default Profile;
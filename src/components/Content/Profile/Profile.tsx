import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props:any) => {

    return (
        <section className={styles.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer />
        </section>
    );
}

export default Profile;
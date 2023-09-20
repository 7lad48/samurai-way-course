import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {dispatchType} from "../../../redux/state";
import PostsContainer from "./Posts/PostsContainer";
import {ProfilePostsContainerType} from "../../../redux/profileReducer";

const Profile: React.FC<ProfilePostsContainerType & dispatchType> = (props) => {
    return (
        <section className={styles.profile}>
            <ProfileInfo />
            <PostsContainer {...props}/>
        </section>
    );
}

export default Profile;
import React from "react";
import profileInfo from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";

const ProfileInfo = (props:any) => {
    if(!props.profile) return <Preloader/>
    return (
        <div className={profileInfo.wrapper}>
            <div className={profileInfo.picture}>
                <img src="https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=" alt="profile picture"/>
            </div>
            <div className={profileInfo.description}>
                <img src={props.profile.photos.large} alt=""/>
                <div>Полное имя: {props.profile.fullName}</div>
                <p>Обо мне: {props.profile.aboutMe}</p>
                <div>{props.profile.lookingForAJob ? 'Нахожусь в поиске работы' : 'Не ищу работу'}</div>
                <div>Стек технологий: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
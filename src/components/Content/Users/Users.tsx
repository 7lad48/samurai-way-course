import React, {FC} from "react";
import styles from "./Users.module.css";
import noAvatar from "../../../assets/images/noavatar.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API} from "../../../api/api";

type UsersPropsTypes= {
    totalCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const Users: FC<UsersPropsTypes> = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const unfollow = (userId: number) => {
        API.unfollow(userId)
            .then(data => {
            if(data.resultCode === 0){
                props.unfollow(userId);
            }
        })
    }
    const follow = (userId: number) => {
        API.follow(userId)
            .then(data => {
            if(data.resultCode === 0){
                props.follow(userId);
            }
        })
    }
    return <div className={styles.usersContainer}>
        <div>
            {pages.map(p => {
                const setPage = () => {
                    props.onPageChanged(p)
                }
                return <span key={p}
                             className={props.currentPage === p ? `${styles.selectedPage} ${styles.pageNumber}` : styles.pageNumber}
                             onClick={setPage}>{p}</span>
            })}
        </div>
        {props.users.map((user: UserType) => <div key={user.id} className={styles.user}>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : noAvatar} alt='user photo'
                             className={styles.userPhoto}/>
                    </NavLink>
                    <div className={styles.userName}>{user.name}</div>
                </div>
                {user.followed
                    ? <button onClick={() => {unfollow(user.id)}}>unfollow</button>
                    : <button onClick={() => {follow(user.id)}}>follow</button>
                }
            </div>
            <div>
                {user.status}
            </div>
            <div>
                {/*<div>{user.location.city}</div>*/}
                {/*<div>{user.location.country}</div>*/}
            </div>
        </div>)}
    </div>
}
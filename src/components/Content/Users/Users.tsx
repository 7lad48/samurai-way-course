import React from "react";
import styles from "./Users.module.css";
import noAvatar from "../../../assets/images/noavatar.png";
import {UserType} from "../../../redux/usersReducer";


export const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
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
                    <img src={user.photos.small ? user.photos.small : noAvatar} alt='user photo'
                         className={styles.userPhoto}/>
                    <div className={styles.userName}>{user.name}</div>
                </div>
                {user.followed
                    ? <button onClick={() => {
                        props.unfollow(user.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        props.follow(user.id)
                    }}>follow</button>
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
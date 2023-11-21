import React from 'react';
import {UsersPropsTypes} from "./UsersContainer";
import styles from './Users.module.css'
import noAvatar from '../../../assets/images/noavatar.png'
import axios from "axios";

export const Users: React.FC<UsersPropsTypes> = ({users,
                                                 ...rest}) => {
    const loadUsers = () => {
        if(users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                rest.setUsers(response.data.items)
            })
        }
    }
    return <div className={styles.usersContainer}>
        <button onClick={loadUsers}>show</button>
    {users.map(user => <div key={user.id} className={styles.user}>
        <div>
            <div>
                <img src={user.photos.small ? user.photos.small : noAvatar} alt='user photo' className={styles.userPhoto}/>
                <div className={styles.userName}>{user.name}</div>
            </div>
            {user.followed
                ? <button onClick={() => {rest.unfollow(user.id)}}>unfollow</button>
                : <button onClick={() => {rest.follow(user.id)}}>follow</button>
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
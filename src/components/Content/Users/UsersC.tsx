import React from 'react';
import {UsersPropsTypes} from "./UsersContainer";
import styles from './Users.module.css'
import noAvatar from '../../../assets/images/noavatar.png'
import axios from "axios";

export class UsersC extends React.Component<UsersPropsTypes> {
    // constructor(props: UsersPropsTypes) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div className={styles.usersContainer}>
            {/*<button onClick={this.loadUsers}>show</button>*/}
            {this.props.users.map(user => <div key={user.id} className={styles.user}>
                <div>
                    <div>
                        <img src={user.photos.small ? user.photos.small : noAvatar} alt='user photo'
                             className={styles.userPhoto}/>
                        <div className={styles.userName}>{user.name}</div>
                    </div>
                    {user.followed
                        ? <button onClick={() => {
                            this.props.unfollow(user.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(user.id)
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
}
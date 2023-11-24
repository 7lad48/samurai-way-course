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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged(p: number){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    // componentWillUpdate() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setUsers(response.data.items)
    //     })
    // }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div className={styles.usersContainer}>
            {/*<button onClick={this.loadUsers}>show</button>*/}
            {/*<div><span className={styles.selectedPage}>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span></div>*/}
            <div>
            {pages.map(p => {
                const setPage = () => {
                    this.props.setCurrentPage(p)
                    this.onPageChanged(p)
                }
                return <span className={this.props.currentPage === p ? `${styles.selectedPage} ${styles.pageNumber}` : styles.pageNumber} onClick={setPage}>{p}</span>
            })}
            </div>
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
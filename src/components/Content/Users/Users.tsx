import React from 'react';
import {UsersPropsTypes} from "./UsersContainer";
import styles from './Users.module.css'

export const Users: React.FC<UsersPropsTypes> = ({users,
                                                 ...rest}) => {
    if(users.length === 0){
        rest.setUsers([
            {id: '1', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqAOWiJPnTwYbwKNMgSXcOPO9lrlkvzylQ&usqp=CAU', followed: true, firstName: 'Vlad', status: 'Bla bla blaBla bla blaBla bla bla', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', photo: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', followed: false, firstName: 'Dmitry', status: 'Bla bla bla', location: {city: 'Moscow', country: 'Russia'}},
            {id: '3', photo: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D', followed: true, firstName: 'Leopold', status: 'Bla bla bla', location: {city: 'Gomel', country: 'Belarus'}},
        ])
    }

    return <div className={styles.usersContainer}>
    {users.map(user => <div key={user.id} className={styles.user}>
        <div>
            <div>
                <img src={user.photo} alt='user photo' className={styles.userPhoto}/>
                <div className={styles.userName}>{user.firstName}</div>
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
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
        </div>
    </div>)}
    </div>
}
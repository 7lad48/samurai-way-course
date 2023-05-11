import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/">Profile</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/messages">Messages</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/news">News</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/music">Music</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/settings">Settings</NavLink>
        </nav>
    );
}

export default Navbar;
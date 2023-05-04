import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>Profile</NavLink>
            <NavLink to="/messages" className={styles.link} activeClassName={styles.active}>Messages</NavLink>
            <NavLink to="/news" className={styles.link} activeClassName={styles.active}>News</NavLink>
            <NavLink to="/music" className={styles.link} activeClassName={styles.active}>Music</NavLink>
            <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>Settings</NavLink>
        </nav>
    );
}

export default Navbar;
import React from "react";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a href="#" className={`${styles.link} ${styles.active}`}>Profile</a>
            <a href="#" className={styles.link}>News</a>
            <a href="#" className={styles.link}>Messages</a>
            <a href="#" className={styles.link}>Music</a>
            <a href="#" className={styles.link}>Settings</a>
        </nav>
    );
}

export default Navbar;
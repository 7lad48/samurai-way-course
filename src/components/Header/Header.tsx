import React from "react"
import styles from './Header.module.css'
import logo from '../../logo.svg'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.text}>Way of the Samurai</div>
        </header>
    );
}
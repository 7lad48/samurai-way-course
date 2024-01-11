import React from "react"
import styles from './Header.module.css'
import logo from '../../logo.svg'
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsTypes} from "./HeaderContainer";

export default function Header(props:HeaderContainerPropsTypes){
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.text}>Way of the Samurai</div>
            </div>
            <div className={styles.loginBlock}>
                {
                    props.isAuth ? props.login
                        :<NavLink to={'/login'}>Sign in</NavLink>
                }

            </div>
        </header>
    );
}
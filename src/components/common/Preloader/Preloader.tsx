import React from 'react'
import preloader from "../../../assets/images/loader.gif";
import styles from './Preloader.module.css'

export const Preloader = () => {
    return <div className={styles.preloaderWrapper}>
                <div className={styles.preloaderImageWrapper}>
                    <img className={styles.preloaderImg} src={preloader} alt={'preloader'}/>
                </div>
           </div>
}
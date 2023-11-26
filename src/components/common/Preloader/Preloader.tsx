import React from 'react'
import preloader from "../../../assets/images/loader.gif";
import styles from './Preloader.module.css'

export const Preloader = () => {
    return <div>
                <div>
                    <img src={preloader} alt={'preloader'}/>
                </div>
           </div>
}
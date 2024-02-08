import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";


type MapStatePropsType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = <T,>(Component: ComponentType<T>) => {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props;

        if(!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T}/>

    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}


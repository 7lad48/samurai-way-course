import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})
export const WithAuthRedirect = (Component:any) => {

    const RedirectComponent = (props:any) => {
        if(!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...props}/>

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)



    return ConnectedAuthRedirectComponent;
}


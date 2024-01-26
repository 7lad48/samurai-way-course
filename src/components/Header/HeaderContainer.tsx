import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {authMeTC} from "../../redux/authReducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    authMeTC: () => void
}
export type HeaderContainerPropsTypes = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsTypes>{
    componentDidMount() {
        // API.authMe()
        //     .then(data => {
        //     if(data.resultCode === 0){
        //         let {login, id, email} = data.data
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // })
        this.props.authMeTC()
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, {authMeTC})(HeaderContainer)
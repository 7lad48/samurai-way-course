import React from "react"
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setAuthUserData} from "../../redux/authReducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
export type HeaderContainerPropsTypes = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsTypes>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                let {login, id, email} = response.data.data
                this.props.setAuthUserData(id, email, login);
            }
        })
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
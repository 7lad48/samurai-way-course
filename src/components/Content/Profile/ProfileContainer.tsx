import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import {RootStateType} from "../../../redux/store";

import { useLocation, useNavigate, useParams} from "react-router-dom";
// wrapper to use react-router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

type mapStateToPropsType = {
    profile: any
}
type mapDispatchToPropsType = {
    setUserProfile: (profile:any) => void
}
type ProfilePropsTypes = mapStateToPropsType & mapDispatchToPropsType

// type ParamsPathType = {
//     userId: string;
// }

type RouterParamsType = {
    router: {
        params: {
            userId: string
        }
    }
}

type CommonPropsTypes = ProfilePropsTypes & RouterParamsType

class ProfileContainer extends React.Component<CommonPropsTypes> {
    // let userId = this.props.router.params.userId;
    componentDidMount() {
        // console.log(this.props)
        let userId = this.props.router.params.userId;
        if(!userId) userId = "2" // need fix later
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
    return <Profile {...this.props} profile={this.props.profile}/>
    }
}
const mapStateToProps = (state:RootStateType): mapStateToPropsType => ({
    profile: state.profile.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))
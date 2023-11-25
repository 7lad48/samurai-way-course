import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../../redux/usersReducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsTypes = mapDispatchToPropsType & mapStateToPropsType;


class UsersAPIContainer extends React.Component<UsersPropsTypes> {
    // constructor(props: UsersPropsTypes) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged(p: number) {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}


const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;
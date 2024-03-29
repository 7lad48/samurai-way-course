import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {
    followTC, getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowing, unfollowTC,
    UserType
} from "../../../redux/usersReducer";
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}
type mapDispatchToPropsType = {
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (isFollowing: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
type UsersPropsTypes = mapDispatchToPropsType & mapStateToPropsType;

class UsersAPIContainer extends React.Component<UsersPropsTypes> {
    // constructor(props: UsersPropsTypes) {
    //     super(props);
    // }
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // API.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //     this.props.toggleIsFetching(false)
        // })
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(p: number) {
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(p)
        // API.getUsers(p, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false)
        // })
        this.props.getUsersTC(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
            <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollowTC}
            follow={this.props.followTC}
            isFollowing={this.props.isFollowing}
            />}
        </>
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowing: state.users.isFollowing
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// }
const ActionCreators = {setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching, toggleIsFollowing, getUsersTC, followTC, unfollowTC}
const UsersContainer = connect(mapStateToProps, ActionCreators)(UsersAPIContainer)

export default WithAuthRedirect(UsersContainer);
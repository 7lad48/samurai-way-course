export type UsersActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleIsFetching>;

// export type UserType = {
//     id: number
//     photo: string
//     followed: boolean
//     firstName: string
//     status: string
//     location: LocationType
// }
// export type LocationType = {
//     city: string
//     country: string
// }

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: UserPhotoType
    status: string
    followed: boolean
}
export type UserPhotoType = {
    small: string
    large: string
}
export type UsersContainerType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const InitialState: UsersContainerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state:UsersContainerType = InitialState, action: UsersActionsType): UsersContainerType => {
    switch(action.type){
        case 'FOLLOW': {
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)};
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)};
        }
        case 'SET-USERS': {
            // return {...state, users: [...state.users, ...action.users]};
            return {...state, users: action.users};
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.page};
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount};
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching};
        }
        default: return state;
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users}) as const;
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', page}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount}) as const;
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const;
export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>;

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
    uniqueUrlName: string | null
    photos: UserPhotoType
    status: string | null
    followed: boolean
}
export type UserPhotoType = {
    small: string | null
    large: string | null
}
export type UsersContainerType = {
    users: UserType[]

}

const InitialState: UsersContainerType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]};
        }
        default: return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const;
export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>;

export type UserType = {
    id: string
    photo: string
    followed: boolean
    firstName: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
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

export const followAC = (userId: string) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const;
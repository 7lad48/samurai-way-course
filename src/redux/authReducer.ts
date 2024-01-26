// type InitialStateType<D = {}> = {
//     data: D
//     messages: string[]
//     fieldsErrors: string[]
//     resultCode: number
// }
import {Dispatch} from "redux";
import {API} from "../api/api";

type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type AuthReducerActionTypes = ReturnType<typeof setAuthUserData>

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionTypes): InitialStateType => {
    switch(action.type){
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: true};
        }
        default: return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: 'SET-USER-DATA', data: {id: userId, email, login}}) as const

export const authMeTC = () => (dispatch: Dispatch) => {
    API.authMe()
        .then(data => {
            if(data.resultCode === 0){
                let {login, id, email} = data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
}
import {v1} from "uuid";

export type profileReducerActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>;

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePostsContainerType = {
    postsData: PostType[]
    newPostText: string
}

const InitialState: ProfilePostsContainerType = {
    postsData: [
        {id: '1', message: "Message adad1 lalala", likesCount: 3},
        {id: '2', message: "Message 2 bybyby", likesCount: 11},
        {id: '3', message: "Message 3 tralala", likesCount: 3},
        {id: '4', message: "Messagessdada", likesCount: 4},
    ],
        newPostText: '',
}

export const profileReducer = (state:ProfilePostsContainerType = InitialState, action: profileReducerActionsType): ProfilePostsContainerType => {
    switch(action.type){
        case 'ADD-POST': {
            const newPost: PostType | undefined = state.newPostText.trim()
                ? {id: v1(), message: state.newPostText.trim(), likesCount: 0,}
                : undefined;
            return newPost ? {...state, postsData: [newPost,...state.postsData], newPostText: ''} : state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default: return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const;
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const;
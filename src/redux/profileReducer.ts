import {v1} from "uuid";


export type profileReducerActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>;

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePostsType = {
    postsData: PostType[]
    newPostText: string
}

const InitialState: ProfilePostsType = {
    postsData: [
        {id: '1', message: "Message adad1 lalala", likesCount: 3},
        {id: '2', message: "Message 2 bybyby", likesCount: 11},
        {id: '3', message: "Message 3 tralala", likesCount: 3},
        {id: '4', message: "Messagessdada", likesCount: 4},
    ],
        newPostText: '',
}

export const profileReducer = (state:ProfilePostsType = InitialState, action: profileReducerActionsType): ProfilePostsType => {
    switch(action.type){
        case 'ADD-POST': {
            if(state.newPostText.trim()){
                const newPost: PostType = {
                    id: v1(), message: state.newPostText.trim(), likesCount: 0,
                };
                state.postsData = [newPost, ...state.postsData];
                state.newPostText = '';
            }
            return state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText;
            return state;
        }
        default: return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const;
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const;
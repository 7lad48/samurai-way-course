import {v1} from "uuid";
import {addPostAC, ProfilePostsContainerType, profileReducer, updateNewPostTextAC} from "./profileReducer";
import {
    dialogsReducer,
    sendTypedDialogMsgAC,
    updateTypedDialogTextAC
} from "./dialogsReducer";

export type stateType = {
    DialogsPage: DialogsPageType
    ProfilePosts: ProfilePostsContainerType
    sidebar: object
}
export type DialogsPageType = {
    dialogsUsersData: UsersType[]
    dialogsMessagesData: MessagesType[]
    typedMessage: string
}
export type UsersType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}


export type PostType = {
    id: string
    message: string
    likesCount: number
}
// export type addPostType = {
//     addPost: ()=>void
// }
// export type updateNewPostTextType = {
//     updateNewPostText: (newText:string)=>void
// }
export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateTypedDialogTextAC>
    | ReturnType<typeof sendTypedDialogMsgAC>
    ;

export type dispatchType = {
    dispatch: (action:ActionsType)=>void
}
export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType)=>void
    getState: ()=> stateType
    // subscribe: (observer:(state: stateType)=>void) => void
    subscribe: (observer:()=>void) => void
    // addPost: ()=> void
    // updateNewPostText: (newText: string)=>void
    dispatch: (action:ActionsType)=>void
}
const store: StoreType = {
    _state: {
        DialogsPage: {
            dialogsUsersData: [
                {id: 1, name: 'Dimychs'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Vasya'},
            ],
            dialogsMessagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Yo-yo'},
                {id: 4, message: 'Hi-hi'},
            ],
            typedMessage: '',
        },
        //@ts-ignore
        ProfilePosts: {
            postsData: [
                {id: '1', message: "Message adad1 lalala", likesCount: 3},
                {id: '2', message: "Message 2 bybyby", likesCount: 11},
                {id: '3', message: "Message 3 tralala", likesCount: 3},
                {id: '4', message: "Messagessdada", likesCount: 4},
            ],
            newPostText: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('subscriber isn\'t defined');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        //@ts-ignore
        this._state.ProfilePosts = profileReducer(this._state.ProfilePosts, action);
        //@ts-ignore
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);

        this._callSubscriber(this._state);

    }
}

export default store;

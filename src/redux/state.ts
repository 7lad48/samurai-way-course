import {v1} from "uuid";

export type stateType = {
    DialogsPage: DialogsPageType
    ProfilePosts: ProfilePostsType
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

export type ProfilePostsType = {
    postsData: PostType[]
    newPostText: string
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
    subscribe: (observer:(state: stateType)=>void) => void
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
        ProfilePosts: {
            postsData: [
                {id: '1', message: "Message adad1 lalala", likesCount: 3},
                {id: '2', message: "Message 2 bybyby", likesCount: 11},
                {id: '3', message: "Message 3 tralala", likesCount: 3},
                {id: '4', message: "Messagessdada", likesCount: 4},
            ],
            newPostText: '',
        },
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
        switch(action.type){
            case 'ADD-POST': {
                if(this._state.ProfilePosts.newPostText.trim()){
                    const newPost: PostType = {
                        id: v1(), message: this._state.ProfilePosts.newPostText.trim(), likesCount: 0,
                    };
                    this._state.ProfilePosts.postsData.unshift(newPost);
                    this._state.ProfilePosts.newPostText = '';
                    this._callSubscriber(this._state);
                }
                break;
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.ProfilePosts.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            }
            case 'UPDATE-TYPED-DIALOG-TEXT': {
                this._state.DialogsPage.typedMessage = action.text;
                this._callSubscriber(this._state);
                break;
            }
            case 'SEND-TYPED-DIALOG-MSG':{
                const newMsg: MessagesType = {id: 65, message: this._state.DialogsPage.typedMessage};
                this._state.DialogsPage.dialogsMessagesData = [...this._state.DialogsPage.dialogsMessagesData, newMsg];
                this._state.DialogsPage.typedMessage = '';
                this._callSubscriber(this._state);
                break;
            }
        }
    }
    // addPost() {
    //     if(this._state.ProfilePosts.newPostText.trim()){
    //         const newPost: PostType = {
    //             id: v1(), message: this._state.ProfilePosts.newPostText.trim(), likesCount: 0,
    //         };
    //         this._state.ProfilePosts.postsData.unshift(newPost);
    //         this._state.ProfilePosts.newPostText = '';
    //         this._callSubscriber(this._state);
    //     }
    // },
    // updateNewPostText (newText) {
    //     this._state.ProfilePosts.newPostText = newText;
    //     this._callSubscriber(this._state);
    // }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const;
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const;
export const updateTypedDialogTextAC = (text: string) => ({type: 'UPDATE-TYPED-DIALOG-TEXT', text: text}) as const;
export const sendTypedDialogMsgAC = () => ({type: 'SEND-TYPED-DIALOG-MSG'}) as const;

export default store;

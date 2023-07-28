import {v1} from "uuid";

export type stateType = {
    DialogsPage: DialogsPageType
    ProfilePosts: ProfilePostsType
}
export type DialogsPageType = {
    dialogsUsersData: UsersType[]
    dialogsMessagesData: MessagesType[]
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
export type addPostType = {
    addPost: ()=>void
}
export type updateNewPostTextType = {
    updateNewPostText: (newText:string)=>void
}
export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType)=>void
    getState: ()=> stateType
    addPost: ()=> void
    subscribe: (observer:(state: stateType)=>void) => void
    updateNewPostText: (newText: string)=>void
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
    addPost() {
        if(this._state.ProfilePosts.newPostText.trim()){
            const newPost: PostType = {
                id: v1(), message: this._state.ProfilePosts.newPostText.trim(), likesCount: 0,
            };
            this._state.ProfilePosts.postsData.unshift(newPost);
            this._state.ProfilePosts.newPostText = '';
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    updateNewPostText (newText) {
        this._state.ProfilePosts.newPostText = newText;
        this._callSubscriber(this._state);
    }
}


export default store;

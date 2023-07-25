import {rerenderEntireTree} from "../render";

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

let state: stateType = {
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
        newPostText: 'it-kamasutra',
    },
}

export const addPost = ()=> {
    if(state.ProfilePosts.newPostText.trim()){
        const newPost: PostType = {
            id: '11', message: state.ProfilePosts.newPostText.trim(), likesCount: 0,
        };
        state.ProfilePosts.postsData.unshift(newPost);
       // updateNewPostText('')
        state.ProfilePosts.newPostText = '';
        rerenderEntireTree(state);
    }

}
export const updateNewPostText = (newText:string)=> {
    state.ProfilePosts.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;
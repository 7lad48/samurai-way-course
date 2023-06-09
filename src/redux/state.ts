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
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type addPost = {
    addPost: (post:string)=>void
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
    },
}

export const addPost = (post:string)=> {
    if(post.trim()){
        const newPost = {
            id: '11', message: post.trim(), likesCount: 0,
        };
        state.ProfilePosts.postsData.unshift(newPost);
        rerenderEntireTree(state)
    }

}
export default state;
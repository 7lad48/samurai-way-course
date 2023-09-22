import {v1} from "uuid";

export type dialogsReducerActionsType = ReturnType<typeof updateTypedDialogTextAC>
    | ReturnType<typeof sendTypedDialogMsgAC>;

export type UserType = {
    id: number
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

export type DialogsPageContainerType = {
    dialogsUsersData: UserType[]
    dialogsMessagesData: MessagesType[]
    typedMessage: string
}
//
// export type DialogsPageContainerType = typeof InitialState;

const InitialState: DialogsPageContainerType = {
    dialogsUsersData: [
        {id: 1, name: 'Dimychs'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Vasya'},
    ],
        dialogsMessagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'Yo-yo'},
        {id: '4', message: 'Hi-hi'},
    ],
        typedMessage: '',
}

export const dialogsReducer = (state:DialogsPageContainerType = InitialState, action: dialogsReducerActionsType): DialogsPageContainerType => {
    switch(action.type){
        case 'UPDATE-TYPED-DIALOG-TEXT': {
            return {...state, typedMessage: action.text};
            // state.typedMessage = action.text;
            // return state;
        }
        case 'SEND-TYPED-DIALOG-MSG':{
             const newMsg: MessagesType = {id: v1(), message: state.typedMessage};
            // state.dialogsMessagesData = [...state.dialogsMessagesData, newMsg];
            // state.typedMessage = '';
            // return state;
            return {...state, dialogsMessagesData: [...state.dialogsMessagesData, newMsg], typedMessage: ''}
        }
        default: return state;
    }
}



export const updateTypedDialogTextAC = (text: string) => ({type: 'UPDATE-TYPED-DIALOG-TEXT', text: text}) as const;
export const sendTypedDialogMsgAC = () => ({type: 'SEND-TYPED-DIALOG-MSG'}) as const;
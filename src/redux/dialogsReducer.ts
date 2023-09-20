export type dialogsReducerActionsType = ReturnType<typeof updateTypedDialogTextAC>
    | ReturnType<typeof sendTypedDialogMsgAC>;

export type UsersType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageContainerType = {
    dialogsUsersData: UsersType[]
    dialogsMessagesData: MessagesType[]
    typedMessage: string
}

const InitialState: DialogsPageContainerType = {
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
}

export const dialogsReducer = (state:DialogsPageContainerType = InitialState, action: dialogsReducerActionsType): DialogsPageContainerType => {
    switch(action.type){
        case 'UPDATE-TYPED-DIALOG-TEXT': {
            state.typedMessage = action.text;
            return state;
        }
        case 'SEND-TYPED-DIALOG-MSG':{
            const newMsg: MessagesType = {id: 65, message: state.typedMessage};
            state.dialogsMessagesData = [...state.dialogsMessagesData, newMsg];
            state.typedMessage = '';
            return state;
        }
        default: return state;
    }
}



export const updateTypedDialogTextAC = (text: string) => ({type: 'UPDATE-TYPED-DIALOG-TEXT', text: text}) as const;
export const sendTypedDialogMsgAC = () => ({type: 'SEND-TYPED-DIALOG-MSG'}) as const;
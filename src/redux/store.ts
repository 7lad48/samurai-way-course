import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {legacy_createStore as createStore, combineReducers} from "redux";


const RootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer
});

export const store = createStore(RootReducer);

export type RootStateType = ReturnType <typeof RootReducer>;
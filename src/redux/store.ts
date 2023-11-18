import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {legacy_createStore as createStore, combineReducers} from "redux";
import {usersReducer} from "./usersReducer";

const RootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
});

export const store = createStore(RootReducer);

export type RootStateType = ReturnType <typeof RootReducer>;
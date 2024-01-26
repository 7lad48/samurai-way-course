import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType <typeof RootReducer>;

//@ts-ignore
window.store = store
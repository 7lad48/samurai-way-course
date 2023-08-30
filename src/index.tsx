import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {stateType} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App {...state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});
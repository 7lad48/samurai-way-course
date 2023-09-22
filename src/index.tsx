import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stateType} from "./redux/___state";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux/store";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});
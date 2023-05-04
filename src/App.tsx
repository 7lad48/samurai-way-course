import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Messages from "./components/Content/Messages/Messages";
import Music from "./components/Content/Music/Music";
import News from "./components/Content/News/News";
import Settings from "./components/Content/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App():JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route exact path='/messages' component={Messages}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

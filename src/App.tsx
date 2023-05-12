import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Music from "./components/Content/Music/Music";
import News from "./components/Content/News/News";
import Settings from "./components/Content/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {stateType} from './redux/state'

const App: React.FC<stateType> = (props):JSX.Element=> {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Routes>
                        <Route path='/' element={<Profile {...props.ProfilePosts}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/dialogs' element={<Dialogs {...props.DialogsPage}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;

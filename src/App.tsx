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
import {stateType, addPost} from './redux/state'

const App: React.FC<stateType & addPost> = ({
                                      ProfilePosts,
                                      DialogsPage,
                                      addPost,
                                  }): JSX.Element => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Routes>
                    <Route path='/' element={<Profile {...ProfilePosts} addPost={addPost}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/dialogs' element={<Dialogs {...DialogsPage}/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Music from "./components/Content/Music/Music";
import News from "./components/Content/News/News";
import Settings from "./components/Content/Settings/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import {stateType, addPostType, updateNewPostTextType} from './redux/state'
import {Error404} from "./components/Error404";

const App: React.FC<stateType & addPostType & updateNewPostTextType> = ({
                                                                            ProfilePosts,
                                                                            DialogsPage,
                                                                            addPost,
                                                                            updateNewPostText,
                                                                        }): JSX.Element => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path='/profile' element={<Profile {...ProfilePosts} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/dialogs' element={<Dialogs {...DialogsPage}/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/*' element={<Error404/>}/>
                    {/*<Route path={'/dialogs/:id'} element={<Page pages={dataState.pages}/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;

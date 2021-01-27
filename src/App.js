import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App(props) {
    return (
        <div className={styles.app_wrapper}>
            <Navbar/>
            <HeaderContainer />
            <Route path={"/profile/:userID?"} render={() =>  <ProfileContainer />}/>
            <Route path={"/users"} render={() => <UsersContainer />}/>
            <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
            <Route path={"/login"} render={() => <LoginContainer />}/>
        </div>
    );
}

export default App;
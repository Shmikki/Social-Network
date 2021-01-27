import Logo from "./images/logo.png"
import styles from "./Header.module.css"
import Search from "./Search/Search";
import {NavLink} from "react-router-dom";
import React from "react"
import Auth from "./Auth/Auth";
import {User} from "./User/User";


const Header = (props) => {

        return(
        <header className={styles.main}>
            <div className={styles.content}>
            <div className={styles.logo}>
                <NavLink  to="/profile"> <img src={Logo} alt="logo" className={styles.logo_image} /> </NavLink>
            </div>
            <Search />
            <div className={styles.userInfo}>
                <User userName={props.userName} userImage={props.userImage} />
                <Auth logOut={props.logOut} userID={props.userID}/>
            </div>
            </div>
        </header>
        );

}

export default Header;
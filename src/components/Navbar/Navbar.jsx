import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


class Navbar extends React.Component{
    render() {
        return (
            <div className={styles.content}>
                <navbar className={styles.menu}>
                    <div className={styles.menu_item}>
                        <NavLink to="/profile" className={styles.navLink}>
                            <i className="fa fa-home"></i>
                            <p className={styles.link_text}>Profile</p>
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/dialogs" className={styles.navLink}>
                            <i className="fa fa-comment"></i>
                            <p className={styles.link_text}>Messages</p>
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/users" className={styles.navLink}>
                            <i className="fa fa-users"></i>
                            <p className={styles.link_text}>Users</p>
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/news" className={styles.navLink}>
                            <i className="fa fa-newspaper-o"></i>
                            <p className={styles.link_text}>News</p>
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/music" className={styles.navLink}>
                            <i className="fa fa-music"></i>
                            <p className={styles.link_text}>Music</p>
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/settings" className={styles.navLink}>
                            <i className="fa fa-cog"></i>
                            <p className={styles.link_text}>Settings</p>
                        </NavLink>
                    </div>
                </navbar>
            </div>
        );
    }
}

export default Navbar;
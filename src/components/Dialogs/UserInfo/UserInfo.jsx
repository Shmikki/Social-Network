import React from "react";
import styles from "./UserInfo.module.css";
import Avatar from "./Avatar/Avatar";
import {NavLink} from "react-router-dom";


class UserInfo extends React.Component {


    render() {
        return (
            <div className={styles.content}>
                <Avatar src={this.props.AvatarURL} alt={this.props.name}/>
                <div className={styles.name}>
                    <NavLink to={`/dialogs/${this.props.id}`}>
                        {this.props.name} {this.props.surname}
                    </NavLink>
                </div>
            </div>
        );
    }
}


export default UserInfo;
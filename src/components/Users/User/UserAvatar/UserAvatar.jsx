import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./UserAvatar.module.css";
import userImage from "../../../../assets/images/user-image.png";

class UserAvatar extends React.Component{

    render(){
        return(
            <div className={styles.UserAvatar}>
                <NavLink to={`/profile/${this.props.id}`}>
                    <img src={ this.props.photos.small ? this.props.photos.small : userImage} className={styles.UserAvatar_img}/>
                </NavLink>
            </div>
        )
    }
}

export default UserAvatar;

import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./UserProfileAvatar.module.css";
import userImage from "../../../../assets/images/user-image.png";

function UserProfileAvatar(props){
    return (
        <div className={styles.UserAvatar}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photos.small ? props.photos.small : userImage}
                     className={styles.img}/>
            </NavLink>
        </div>
    )

}

export default UserProfileAvatar;

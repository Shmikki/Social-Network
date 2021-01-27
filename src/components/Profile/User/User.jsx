import styles from "./User.module.css"
import React from "react";
import UserProfileAvatar from "./UserProfileAvatar/UserProfileAvatar";
import Status from "./Status/Status";


function User(props) {
    return (
        <div className={styles.profile}>
            <UserProfileAvatar id={props.profile.userId} photos={props.profile.photos}/>
            <div className={styles.info}>
                <div className={styles.name}>{props.profile.fullName}</div>
                <Status status={props.status} setStatus={props.setStatus} />
            </div>
        </div>
    );
}

export default User;
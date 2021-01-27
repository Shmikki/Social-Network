import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

const User = (props) => {


    return (
        <div className={styles.info}>
            <UserAvatar id={props.user.id} photos={props.user}/>
            <div className={styles.UserContent}>
                <div className={styles.name}>
                    <span>
                        {props.user.name}
                    </span>
                </div>
                <div className={styles.message}>
                    <span>Write message</span>
                </div>
                {props.user.followed ?
                    <button disabled={props.isFollowInProgress.some((userID) => userID === props.user.id)}
                            onClick={() => props.unFollow(props.user.id)}>followed</button>
                    :
                    <button disabled={props.isFollowInProgress.some((userID) => userID === props.user.id)}
                            onClick={() => props.follow(props.user.id)}>unfollowed</button>
                }
            </div>
        </div>
    );
}

export default User;
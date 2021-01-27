import Post from "./Post/Post";
import styles from "./Pfofile.module.css"
import User from "./User/User";
import React from "react";
import NewPost from "./NewPost/NewPost";
import Preloader from "../common/Preloader/Preloader";




function Profile(props){
        return (
            <div className={styles.content}>
                    {props.isFetching ? <Preloader /> : <User  profile={props.profile} status={props.status} setStatus={props.setStatus} />}
                <NewPost
                    addPost={props.addPost}
                />
                {props.posts.map(item => <Post post_text={item.post_text} likes={item.likes} src={item.src} />)}
            </div>
        );
}

export default Profile;
import React from 'react';
import styles from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";


function Users(props) {
    const users = props.users.map(user => {
        return (<User user={user}
                      isFollowInProgress={props.isFollowInProgress}
                      follow={props.follow}
                      unFollow={props.unFollow}
        />)
    })

    return (
        <div className={styles.content}>
            <Paginator onChangeCurrentPage={props.onChangeCurrentPage} totalItemsCount={props.totalCountUsers}
                       currentPage={props.currentPage} pageSize={props.pageSize}/>
            {props.isFetching ? <Preloader classname={styles.preloader}/> : users}
        </div>

    );
}


export default Users;
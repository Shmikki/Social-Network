import styles from "./Dialogs.module.css";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";


function Dialogs(props) {

    return (
        <div className={styles.content}>
            <div className={styles.Users}>
                {props.DialogsPage.users.map(item => <UserInfo AvatarURL={""} name={item.name} surname={item.surname}
                                                               id={item.id}/>)}
            </div>
            <div className={styles.vl}></div>
            <div className={styles.messages}>
                {props.DialogsPage.messages.map(item => <Message text={item.text} date={item.date}/>)}
                <NewMessage sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
}


export default Dialogs;
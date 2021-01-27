import React from "react";
import styles from "./Message.module.css";

class Message extends React.Component {

    render() {
        return (
            <div className={styles.message}>
                <div className={styles.messageText}>
                    {this.props.text}
                </div>
                <div className={styles.date}>
                    {this.props.date}
                </div>
            </div>
        );
    }
}

export default Message;
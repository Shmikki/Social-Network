import React, {useState} from "react";
import styles from "./Status.module.css";

export default function Status(props) {

    let [editMode, SetEditMode] = useState(false);
    let [status, onChangeStatus] = useState(props.status);
    return (
        <div className={styles.content}>
            {editMode ?
                <div className={styles.editorCurrentStatus}
                 onBlur={(e) => {
                    SetEditMode(false);
                    props.setStatus(status);
                }}
                 onFocus={() => SetEditMode(true)}>
                    <input className={styles.editorInput} autoFocus={true} onChange={(e) => onChangeStatus(e.target.value)}
                           value={status} />
                </div>
                : <span className={styles.currentStatus}
                        onClick={() => SetEditMode(true)}> {props.status ? props.status : <div className={styles.unsetStatus}>set a status message</div>}</span>}
        </div>
    )
}
import React from "react";
import styles from "./NewMessage.module.css";
import {Field, Form} from "react-final-form";


const NewMessage = (props) =>{
    return(
        <Form
            onSubmit={(values) => {
                props.sendMessage(values.Message);
                values.Message = ""
            }
            }
            initialValues={
                {
                    Message: ""
                }
            }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.form__area}>
                        <Field name="Message" component="textarea"  placeholder="write your message" className={styles.area} />
                    </div>
                    <button type="submit" className={styles.sendBtn}>Send</button>
                </form>
            )}
        />
    )
}

export default NewMessage;
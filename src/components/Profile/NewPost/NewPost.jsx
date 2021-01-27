import { Form, Field } from 'react-final-form';
import styles from "../../Login/Form/LoginForm.module.css";

const NewPost = (props) => {
    return(
        <Form
            onSubmit={(values) => {
                props.addPost(values.Post);
                values.Post = ""
                }
            }
            initialValues={
                {
                    Post: ""
                }
            }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.formContent}>
                    <div className={styles.formItem}>
                        <Field name="Post" component="textarea" placeholder="write some news" />
                    </div>
                    <button type="submit" className={styles.loginBtn}>Add</button>
                </form>
            )}
        />
    )
}



export default NewPost;
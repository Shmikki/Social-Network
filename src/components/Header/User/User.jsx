import defaultProfileImage from "../../../assets/images/user-image.png"
import classes from "./User.module.css"

export const User = (props) => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img className={classes.avatarImage}
                    src={props.userImage ? props.userImage : defaultProfileImage} alt=""/>
            </div>
            <div className={classes.name}>
                {props.userName}
            </div>
        </div>
    )
}
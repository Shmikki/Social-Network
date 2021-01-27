import  {Redirect , NavLink} from "react-router-dom";

const Auth = (props) => {
    return (
        props.userID ? <span onClick={() => {props.logOut();  <Redirect to={"/login"} />} }>Logout</span> : <NavLink to={"login"}>Login </NavLink>
    )
}

export default Auth;
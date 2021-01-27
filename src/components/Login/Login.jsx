import {LoginForm} from "./Form/LoginForm";

export default function Login(props){

    return (
        <div>
            <h1>Login</h1>
            <LoginForm logIn={props.logIn} />
        </div>)
}
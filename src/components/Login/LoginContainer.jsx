import React from "react";
import {compose} from "redux";
import {logIn} from "../../redux/authReducer";
import {connect} from "react-redux";
import Login from "./Login";
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component{


    render(){

        return(

            this.props.isAuth ? <Redirect to={"/profile"} /> : <Login logIn={this.props.logIn} />
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (email, password, rememberMe) => dispatch(logIn(email, password, rememberMe))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(LoginContainer)
import {connect} from "react-redux";
import React from "react";
import {getAuthThunkCreator, Logout} from "../../redux/authReducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header userID={this.props.auth.isAuth} logOut={this.props.logOut} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAuth: () => dispatch(getAuthThunkCreator()),
        logOut: () => dispatch(Logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
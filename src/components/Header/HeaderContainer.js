import {connect} from "react-redux";
import React from "react";
import {getAuthThunkCreator, Logout} from "../../redux/authReducer";
import Header from "./Header";
import {compose} from "redux";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header userName={this.props.userName} UserImage={this.props.userImage} userID={this.props.auth.isAuth} logOut={this.props.logOut} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth,
        userImage : state.profilePage.profile.photos,
        userName : state.auth.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAuth: () => dispatch(getAuthThunkCreator()),
        logOut: () => dispatch(Logout())
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps))(HeaderContainer);
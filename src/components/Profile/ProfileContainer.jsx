import {
    addPostActionCreator,
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    setProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : this.props.myProfileId;
        this.props.getProfile(userID);
        this.props.getProfileStatus(userID);
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     addPost={this.props.addPost} posts={this.props.posts} isFetching={this.props.isFetching}
                     status={this.props.status}
                     setStatus={this.props.setProfileStatus}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        myProfileId: state.auth.userID,
        isFetching: state.profilePage.isFetching,
        status : state.profilePage.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => dispatch(addPostActionCreator(text)),
        getProfile : (profileID) => dispatch(getProfileThunkCreator(profileID)),
        getProfileStatus: (profileID) => dispatch(getProfileStatusThunkCreator(profileID)),
        setProfileStatus : (status) => dispatch(setProfileStatusThunkCreator(status))
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileContainer)
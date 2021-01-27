import {connect} from "react-redux";
import {
    changeFollowActionCreator,
    toggleFollowInProgress, getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../../redux/usersReducer";
import {Component} from "react";
import Users from "./Users";

class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.onChangeCurrentPage = this.onChangeCurrentPage.bind(this);
    }

    componentDidMount() {
        this.props.getUsers()
    }

    onChangeCurrentPage(p) {
        this.props.getUsers(p)
    }

    render() {
        return (
            <Users users={this.props.users}
                   onChangeCurrentPage={this.onChangeCurrentPage}
                   currentPage={this.props.currentPage}
                   totalCountUsers={this.props.totalCountUsers}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   isFollowInProgress={this.props.isFollowInProgress}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCountUsers: state.usersPage.totalCountUsers,
        isFetching: state.usersPage.isFetching,
        isFollowInProgress: state.usersPage.isFollowInProgress,
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            getUsers: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
            follow: (userID) => dispatch(followThunkCreator(userID)),
            unFollow: (userID) => dispatch(unFollowThunkCreator(userID))
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

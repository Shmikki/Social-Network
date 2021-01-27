import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
    sendMessageActionController,
} from "../../redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

class DialogsContainer extends React.Component{

    render(){ return <Dialogs DialogsPage={this.props.DialogsPage} sendMessage={this.props.sendMessage} />}
}


const mapStateToProps = state => {
    return {
        DialogsPage : state.DialogsPage    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => dispatch(sendMessageActionController(text))
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer);
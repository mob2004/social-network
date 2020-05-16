import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    removeMessageActionCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },

        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },

        removeMessage: () => {
            dispatch(removeMessageActionCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
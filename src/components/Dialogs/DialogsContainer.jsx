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

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let  onNewMessageChange= (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let removeMessage = () => {
        //props.removeMessage();
        props.store.dispatch(removeMessageActionCreator());
    }
    return (<Dialogs sendMessage = {onSendMessageClick}
                     updateNewMessageBody = {onNewMessageChange}
                     removeMessage = {removeMessage}
                     dialogsPage = {state}/>)
}

export default DialogsContainer;
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
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let  onNewMessageChange= (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            let removeMessage = () => {
                //props.removeMessage();
                store.dispatch(removeMessageActionCreator());
            }
            return <Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     removeMessage={removeMessage}
                     dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
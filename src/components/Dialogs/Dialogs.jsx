import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator, removeMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        //props.addMessage();
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        //props.updateNewMessageText(text);
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }
    let removeMessage = () => {
        //props.removeMessage();
        props.dispatch(removeMessageActionCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea placeholder='Enter your message'
                              ref = {newMessageElement}
                              onChange = {onMessageChange}
                              value = {props.newMessageText} />
                </div>
                <div>
                    <button onClick = {addMessage} >Send message</button>
                </div>
                <div>
                    <button onClick = {removeMessage} >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
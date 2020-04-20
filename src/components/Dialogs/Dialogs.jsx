import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import {dialogsElements, messagesElements} from "../../index";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessagElement = React.createRef();
    let addMessage = () => {
        let text = newMessagElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea ref = {newMessagElement} ></textarea>
                </div>
                <div>
                    <button onClick = {addMessage} >Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
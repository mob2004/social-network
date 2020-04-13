import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is it going?"},
    {id: 3, message: "Yo, man!"},
    {id: 4, message: "Yo!"},
    {id: 5, message: "Yo"}
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
let messagesElements = messages.map(m => <Message message={m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
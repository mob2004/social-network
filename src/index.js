import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
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
export let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
export let messagesElements = messages.map(m => <Message message={m.message}/>);
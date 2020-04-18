import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";

let posts = [
    {id: 1, message: "How are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 10},
    {id: 3, message: "BlaBla", likesCount: 15},
    {id: 4, message: "DaDa", likesCount: 19}
]

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



ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

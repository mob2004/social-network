import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        posts: [
            {id: 1, message: "How are you?", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 10},
            {id: 3, message: "BlaBla", likesCount: 15},
            {id: 4, message: "DaDa", likesCount: 19}
        ],
        newPostText: 'SamuraiJS'
    },
    dialogsPage : {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is it going?"},
            {id: 3, message: "Yo, man!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: "Yo"}
        ],
        newMessageText: 'ReactJS'
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.unshift(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}
export default state;
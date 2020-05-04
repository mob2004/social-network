const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const REMOVE_MESSAGE = 'REMOVE-MESSAGE';

let store = {
    _state : {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return  this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /*addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.newMessageText.length,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
            this._state.dialogsPage.newMessageText = newMessage;
            this._callSubscriber(this._state);
        },
    removeMessage() {
        this._state.dialogsPage.messages.pop();
        this._callSubscriber(this._state);
    },*/
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.newMessageText.length,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
        else if (action.type === REMOVE_MESSAGE) {
            this._state.dialogsPage.messages.pop();
            this._callSubscriber(this._state);
        }
    }
}

/*export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
} Below we have the same thing */
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})

export let updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export let removeMessageActionCreator = () => ({type: REMOVE_MESSAGE})

window.store = store;
export default store;
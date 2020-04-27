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
    getState() {
        return this._state;
    },
        _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
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
    },
        subscribe(observer) {
            this._callSubscriber = observer;
        }
}

window.store = store;
export default store;
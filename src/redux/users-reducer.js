const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// initial initialization value if state is absent
let initialState = {
    posts: [
        {id: 1, message: "How are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "BlaBla", likesCount: 15},
        {id: 4, message: "DaDa", likesCount: 19}
    ],
    newPostText: 'SamuraiJS'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
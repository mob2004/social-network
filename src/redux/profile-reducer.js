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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length+1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
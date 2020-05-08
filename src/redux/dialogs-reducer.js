const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const REMOVE_MESSAGE = 'REMOVE-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: state.messages.length+1, message: body});
            return state;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        case REMOVE_MESSAGE: {
            state.messages.pop();
            return state;
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const removeMessageActionCreator = () => ({type: REMOVE_MESSAGE})
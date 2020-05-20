const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// initial initialization value if state is absent
let initialState = {
    users: [
        /*{id: 1, followed: false, fullName: 'Olzhas', status: 'I am a boss', location: {city: 'Almaty', country: 'Kazakhstan'}},
        {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
    */],
    newPostText: 'SamuraiJS'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC  = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})
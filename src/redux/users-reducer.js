const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

// initial initialization value if state is absent
let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Olzhas', status: 'I am a boss', location: {city: 'Almaty', country: 'Kazakhstan'}},
        {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ],
    newPostText: 'SamuraiJS'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                })
            }
        case UNFOLLOW:

        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userID) => ({type: FOLLOW, userID})

export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
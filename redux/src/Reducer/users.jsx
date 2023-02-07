import { RETRIVE_ALL_USERS } from "../Action/type.jsx"



const initialState = {}
const usersReducer = (users = initialState, action) => {
    console.log("usereducer")
    const { type, payload } = action;
    switch (type) {
        case RETRIVE_ALL_USERS :
            return { ...payload }
        default:
            return users
    }
}

export const SelectUser = (state) => state.users;

export default usersReducer;
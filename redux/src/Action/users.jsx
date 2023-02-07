import UserServices from "./../Services/UserServices.jsx"


export const retriveUsers = () => async (dispatch) => {
console.log("retriveUsers");
    try {
        const ResData = await UserServices.getAll();
        return dispatch({ type: "RETRIVE_ALL_USERS", payload: ResData })
    } catch (error) {
        console.log("error");
    }
}
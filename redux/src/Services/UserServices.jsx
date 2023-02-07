import httpanything from "./../http-common.jsx";

const getAll = () =>{
    return httpanything.get("https://justjayapi.000webhostapp.com/allusers")
}

const UserService = {
    getAll
}
// export getAll;
export default UserService;
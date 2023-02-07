import axios from "axios";
export default axios.create({
    baseURL: "https://justjayapi.000webhostapp.com/allusers",
    headers: {
        "Content-type": "application/json"
    }
})
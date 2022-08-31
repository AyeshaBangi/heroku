import axios from "axios";

export function greetUser() {
    let token = JSON.parse(localStorage?.getItem("_token"));

    return axios.get(`${process.env.REACT_APP_SERVER_URL}data/greet`, {
        headers: { Authorization: `Bearer ${token}` },
    });
}

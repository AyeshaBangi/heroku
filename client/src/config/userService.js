import axios from "axios";

export function CheckUser() {
    return axios.get(`/auth/login/success`, {
        withCredentials: true,
    });
}

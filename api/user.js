import { axios } from "../utils/axios"


export const regUser =  (email,username,password) => {
    return  axios.post(`${axios.defaults.baseURL}/auth/signup`,{
        email,
        username,
        password

    })
}

export const logUser =  (username,password) => {
    return  axios.post(`${axios.defaults.baseURL}/auth/signin`,{
        username,
        password
    })
}
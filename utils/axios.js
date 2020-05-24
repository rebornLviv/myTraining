import Axios from "axios";



export const axios = Axios.create({})
axios.defaults.baseURL = "https://trainings-apps.herokuapp.com/api"
export const setAccessToken = (type, token) => {
    axios.defaults.headers.common.Authorization = `${type} ${token}`
  }
  
  export const resetAccessToken = () => {
    axios.defaults.headers.common.Authorization = ''
  }
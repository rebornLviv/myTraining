import userActionTypes from "./userActionTypes"
import { logUser, regUser } from "../../api/user"
import { setAccessToken } from "../../utils/axios"
import { AsyncStorage } from "react-native"


export const login = (username,password) => {
    return async dispatch => {
        await logUser(username,password)
        .then(
           async response => {
                setAccessToken(response.data.tokenType,response.data.accessToken)
            await    AsyncStorage.setItem('userData',
                JSON.stringify(response.data.accessToken)
                )
                dispatch({
                    type:userActionTypes.AUTH,
                    payload:response.data
                })
            }
        )
    }

}


export const register = (email,username,password) => {
    return async dispatch => {
    await regUser(email,username,password)
    .then(
      async  response => {
            setAccessToken(response.data.tokenType,response.data.accessToken)
          await  AsyncStorage.setItem('userData',
            JSON.stringify(response.data.accessToken)
            )
            dispatch({
                type:userActionTypes.AUTH,
                payload:response.data
            })

        }
    )
    }
}


export const clearError = () => ({
    type:userActionTypes.CLEAR_ERROR
})

export const logout =  () => {
    return async dispatch => {
        AsyncStorage.removeItem('userData');
        dispatch({
            type:userActionTypes.LOGOUT
        })
    }
}

export const autoLogin = (token) => {
    return async (dispatch) => {
        console.log('logging user')
        setAccessToken('Bearer', token)
        dispatch({
            type: userActionTypes.AUTH,
            payload: { token: token }
      
          })

    }


}
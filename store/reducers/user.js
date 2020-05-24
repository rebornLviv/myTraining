import userActionTypes from "../actions/userActionTypes"

const initialState = {
    user : null,
    error: null
}


export default (state= initialState,action) => {
    switch(action.type){
        case userActionTypes.AUTH:
            return{
                ...state,
                user:action.payload
            }
        case userActionTypes.AUTH_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case userActionTypes.LOGOUT:
            return{
                ...state,
                user:null,
                error:null
            }
        case userActionTypes.CLEAR_ERROR:
            return{
                ...state,
                error:null
            }            
        default:
            return state    

    }


}
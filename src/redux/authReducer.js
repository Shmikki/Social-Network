import {authAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
        userID : null,
        email: null,
        login: null,
        isAuth: false
}

export function setUserDataActionCreator(userID, email, login,isAuth){
    return{
        type: SET_USER_DATA,
        data: {
            userID: userID,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
}

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if(response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                dispatch(setUserDataActionCreator(id,email,login,true));
            }}
        )
    }
}

export const logIn = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.logIn(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0){
                   dispatch(getAuthThunkCreator())
            }

        })
    }
}


export const Logout = () => {
    return (dispatch) => {
        authAPI.logOut().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserDataActionCreator(null,null,null,false))
            }
        })
    }
}

export const authReducer = (state = initialState , action) =>{
    switch (action.type) {
        case SET_USER_DATA :
        return {...state , ...action.data};
        default:
            return state;
    }
}
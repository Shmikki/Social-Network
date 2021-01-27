import {applyMiddleware, combineReducers, createStore} from "redux";
import { profileReducer } from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
        profilePage: profileReducer,
        DialogsPage: dialogReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);


const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store;

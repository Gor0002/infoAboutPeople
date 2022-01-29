import {SAVE_USER_LIST, SET_ACTIVE_USER} from './action';
import {LOADER} from './action'

export const saveUserList = (payload) =>{
    return {
        type: SAVE_USER_LIST,
        payload, 
    }
}

export const acLoader = (payload) =>{
    return {
        type: LOADER,
        payload, 
    }
}

export const setActiveUser = (payload) => ({type: SET_ACTIVE_USER, payload})
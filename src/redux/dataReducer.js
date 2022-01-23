
import {
    SWITCH_PAGE,
    LOADING_MUSIC,
    SET_MUSICS, 
    SET_ABOUT
} from './types';

const initialState = {
    homepage: true,
    loadingMusic: false,
    musics: [], 
    about: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_ABOUT: {
            return {
                ...state, 
                about: action.payload
            }
        }
        case SWITCH_PAGE: {
            return {
                ...state, 
                homepage: action.payload
            }
        }
        case LOADING_MUSIC: {
            return {
                ...state, 
                loadingMusic: action.payload
            }
        }
        case SET_MUSICS: {
            return {
                ...state,
                musics: action.payload
            }
        }
        default: 
            return state;
    }
}
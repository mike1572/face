
import {
    SWITCH_PAGE,
    LOADING_MUSIC
} from './types';

const initialState = {
    homepage: true,
    loadingMusic: false, 
}

export default function(state = initialState, action) {
    switch(action.type){
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
        default: 
            return state;
    }
}
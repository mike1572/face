
import {
    SWITCH_PAGE

} from './types';

const initialState = {
    homepage: true
}

export default function(state = initialState, action) {
    switch(action.type){
        case SWITCH_PAGE: {
            return {
                ...state, 
                homepage: action.payload
            }
        }
        default: 
            return state;
    }
}
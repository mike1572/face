
import {
    SWITCH_PAGE,
    LOADING_MUSIC
} from './types'

export const getRecomPage = (expressions) => (dispatch) => {

    dispatch({
        type: SWITCH_PAGE,
        payload: false
    })

    dispatch({
        type: LOADING_MUSIC,
        payload: true
    })

    setTimeout(()=> {
        dispatch({
            type: LOADING_MUSIC,
            payload: false
        })
    
    }, 10000)

    console.log("Expressions", expressions)

}

export const getHomePage = () => (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: true
    })
}


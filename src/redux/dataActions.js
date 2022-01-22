
import {
    SWITCH_PAGE
} from './types'

export const getRecomPage = (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: false
    })
}

export const getHomePage = (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: true
    })
}


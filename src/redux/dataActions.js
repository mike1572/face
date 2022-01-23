
import {
    SWITCH_PAGE,
    LOADING_MUSIC,
    SET_MUSICS
} from './types'

// const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos'

export const getRecomPage = (expressions) => (dispatch) => {

    dispatch({
        type: SWITCH_PAGE,
        payload: false
    })

    dispatch({
        type: LOADING_MUSIC,
        payload: true
    })  

    let SEARCH_QUERY = "happy"
    let AMOUNT_OF_RESULTS = "4"

    fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&maxResults=${AMOUNT_OF_RESULTS}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`)
    .then((response) => response.json())
    .then((data) => { 
        console.log(data.items)

        
        dispatch({
            type: SET_MUSICS,
            payload: data.items
        })

        dispatch({
            type: LOADING_MUSIC,
            payload: false
        })
    })
 
    console.log("Expressions", expressions)

}

export const getHomePage = () => (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: true
    })
}


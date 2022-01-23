
import {
    SWITCH_PAGE,
    LOADING_MUSIC,
    SET_MUSICS
} from './types'

// const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos'

export const getRecomPage = (expressions) => (dispatch) => {

    console.log(expressions.angry)
    dispatch({
        type: SWITCH_PAGE,
        payload: false
    })

    dispatch({
        type: LOADING_MUSIC,
        payload: true
    })  


    let first = {name: '', value: 0}
    let second =  {name: '', value: 0}

    for (const [key, value] of Object.entries(expressions)) {
        if (value > first.value){
            first.name = key
            first.value = value
        }
        if (value < first.value && value > second.value ){
            second.name = key
            second.value = value
        }
    }

    console.log(first, second)
    // angry: 0.029884401708841324
    // disgusted: 0.9335694909095764
    // fearful: 0.00033626012736931443
    // happy: 0.006967954337596893
    // neutral: 0.017639966681599617
    // sad: 0.01113971509039402
    // surprised: 0.0004622840497177094






    let SEARCH_QUERY = "best of heavy metal"
    let AMOUNT_OF_RESULTS = "50"

    fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&maxResults=${AMOUNT_OF_RESULTS}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`)
    .then((response) => response.json())
    .then((data) => { 

        let array = []

        while (array.length < 4){
            let rand = Math.floor(Math.random() * 50) 
            let item = data.items[rand]
            if (item.id.videoId !== undefined){
                array.push(item)
            }
            
        }

        dispatch({
            type: SET_MUSICS,
            payload: array
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


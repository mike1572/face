
import {
    SWITCH_PAGE,
    LOADING_MUSIC,
    SET_MUSICS,
    SET_ABOUT
} from './types'

// const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos'

export const updateAbout = (number, homepage) => (dispatch) => {

    if (number === 1){
        dispatch({
            type: SET_ABOUT,
            payload: true
        })

        dispatch({
            type: SWITCH_PAGE,
            payload: false
        })
        
    } else {

        
        dispatch({
            type: SET_ABOUT,
            payload: false
        })

        if (!homepage){
            dispatch({
                type: SWITCH_PAGE,
                payload: true
            })
        }
    }

}

export const getRecomPage = (expressions) => (dispatch) => {

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
  
    let SEARCH_QUERY = ""

    if (first.value > 0.55){
        if (first.key === 'angry'){
            SEARCH_QUERY = "best of death metal/heavy metal"
        } else if (first.key === 'disgusted'){
            SEARCH_QUERY = "songs to boost mood"
        } else if (first.key === 'fearful'){
            SEARCH_QUERY = "relaxing music"
        } else if (first.key === 'happy'){
            SEARCH_QUERY = "best of groovy music"
        } else if (first.key === 'neutral'){
            SEARCH_QUERY = "chillstep mix"
        } else if (first.key === 'sad'){
            SEARCH_QUERY = "EDM"
        } else if (first.key === 'surprised'){
            SEARCH_QUERY = "pop"
        }
    } else {
        SEARCH_QUERY = "top hits music"
    }

    let AMOUNT_OF_RESULTS = "25"

    fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&maxResults=${AMOUNT_OF_RESULTS}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`)
    .then((response) => response.json())
    .then((data) => { 

        let array = []

        let i = 0;
        while (array.length < 4 && i < AMOUNT_OF_RESULTS){
            i++
            let rand = Math.floor(Math.random() * AMOUNT_OF_RESULTS) 
            let item = data.items[rand]
            if (item.id.videoId !== undefined && !array.includes(item)){
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


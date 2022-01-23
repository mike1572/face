
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
  
    let apiURL;
    let numResults = "25"

    console.log(first.name)

    if (first.value > 0.55){
        if (first.name === 'angry'){
            
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"best of death metal/heavy metal"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else if (first.name === 'disgusted'){
          
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"songs to boost mood"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else if (first.name === 'fearful'){
           
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"relaxing music"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else if (first.name === 'happy'){
          
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"best of groovy music"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else if (first.name === 'neutral'){
        
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"chillstep mix"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else if (first.name === 'sad'){
            
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"EDM"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        } else {
      
            apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"pop"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
        }
    } else {
        apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"top hits music"}&maxResults=${numResults}&key=AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs`
            
    }


    fetch (apiURL)
    .then((response) => response.json())
    .then((data) => { 

        let array = []

        let i = 0;
        while (array.length < 4 && i < numResults){
            i++
            let rand = Math.floor(Math.random() * numResults) 
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


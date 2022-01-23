

import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'

import Music from '../components/Music';

//Redux
import {connect} from 'react-redux';
import { CircularProgress } from '@mui/material';
// import googleapi
const {google} = require('googleapis');


// MUI
import Grid from '@mui/material/Grid';

  // Make sure the client is loaded before calling this method.
  function execute() {
    return google.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 1,
      "q": "death metal"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  google.load("client");


let Recom = (props) => {

    let {data: {homepage, loadingMusic}} = props
   
    // useEffect(()=> {
        //const YoutubeMusicApi = require('youtube-music-api')

        // const api = new YoutubeMusicApi()
        // api.initalize()
        // .then(info => {
        //     api.search("test", "playlists")
        //     .then(result => console.log(result))
        // })
    // }, [])

    if (!homepage){

        if (loadingMusic){
            return (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress size={70} color='warning'sx={{mt: 10, mx: 'auto'}}/>
                </div>                 
            )
        } else {
            return (
                <Fragment>

                    <Music id ="wLIMPrlP2mE"/>
                    <br></br>
                    <br></br>
                </Fragment>
             
            )
        }
        
 
    } else{
        return (
            <Fragment></Fragment>
        )
    }

}

Recom.propTypes = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}


export default connect(mapStateToProps, mapActionsToProps)(Recom);

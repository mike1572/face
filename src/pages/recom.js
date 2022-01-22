

import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'

import Music from '../components/Music';

//Redux
import {connect} from 'react-redux';
import { CircularProgress } from '@mui/material';
// import YoutubeMusicApi from 'youtube-music-api';

// MUI
import Grid from '@mui/material/Grid';

let Recom = (props) => {

    let {data: {homepage, loadingMusic}} = props
   
    useEffect(()=> {
        //const YoutubeMusicApi = require('youtube-music-api')

        // const api = new YoutubeMusicApi()
        // api.initalize()
        // .then(info => {
        //     api.search("test", "playlists")
        //     .then(result => console.log(result))
        // })
    }, [])


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

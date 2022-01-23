

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

    let {data: {homepage, loadingMusic, musics}} = props
   

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
                    <Grid container>
                        {musics.map( (music, i) => {
                            return (
                                <Music id ={music.id.videoId}/>
                            )
                        })} 
                    </Grid>     
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

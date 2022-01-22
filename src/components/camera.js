
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {loadModels} from '../redux/dataActions'
import {videoListener} from '../redux/dataActions'
import * as faceapi from 'face-api.js';


//Redux
import {connect} from 'react-redux';

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ]).then(loadModels())

let Camera = (props) => {

    useEffect(()=> {
        let video = document.getElementById('video')
        videoListener()
        //loadModels()
        navigator.getUserMedia(
            { video: {}},
            stream => video.srcObject = stream, 
            error => console.log(error)
        )

    }, [])
    return (
        <video id="video" width="720" height="560" autoPlay muted></video>
    )
}

Camera.propTypes = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(Camera);
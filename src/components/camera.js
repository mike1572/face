
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as faceapi from 'face-api.js'

//Redux
import {connect} from 'react-redux';
import { TinyFaceDetectorOptions } from 'face-api.js'

let Camera = (props) => {

    useEffect(()=> {
        let video = document.getElementById('video')
        navigator.getUserMedia(
            { video: {}},
            stream => video.srcObject = stream, 
            error => console.log(error)
        )

        document.getElementById('video').addEventListener('play', () => {
            let canvas = document.getElementById('canvas')
            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(document.getElementById('video'), new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
                console.log(detections)
            }, 100)
        })
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
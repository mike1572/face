
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';
import {getRecomPage} from '../redux/dataActions'

// MUI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import * as faceapi from 'face-api.js'


let Camera = (props) => {

    let {data: {homepage}} = props

    useEffect(()=> {

        if (homepage){

       
            let video = document.getElementById('video')
            navigator.getUserMedia(
                { video: {}},
                stream => video.srcObject = stream, 
                error => console.log(error)
            )

            video.addEventListener('play', () => {
           
                const canvas = faceapi.createCanvasFromMedia(video)
                document.body.append(canvas)
                const displaySize = { width: video.width, height: video.height }
                faceapi.matchDimensions(canvas, displaySize)
                setInterval(async () => {
                    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
                    console.log(detections)
                    const resizedDetections = faceapi.resizeResults(detections, displaySize)
                    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                    faceapi.draw.drawDetections(canvas, resizedDetections)
                    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
                    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
                }, 100)
            })




        }


    }, [homepage])

    let handleClick = () => {
        props.getRecomPage()
    }

    let takePicture = () => {
       
    }

    return (
        <Fragment>
            <div id="videoContainer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <video id="video" autoPlay muted style={{maxHeight: 450, marginTop: 15, border: 'solid 5px #002984', borderRadius: '20%'}}></video>
            </div>
            <Box textAlign='center' sx={{mt: 3, mb: 5, display: 'flex', flexDirection: 'column'}}>
                <Button
                    style={{margin: 'auto auto 10px auto'}} 
                    color="primary" 
                    variant="outlined"
                    type="submit"
                    onClick={takePicture}
                >
                    Take Picture
                </Button>
                <Button 
                    style={{margin: 'auto'}} 
                    color="primary" 
                    variant="contained"
                    type="submit"
                    onClick={handleClick}

                >Get Music Recommendations</Button>
            </Box>

        
        </Fragment>

    )
}

Camera.propTypes = {
    data: PropTypes.object.isRequired,
    getRecomPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    getRecomPage
}


export default connect(mapStateToProps, mapActionsToProps)(Camera);
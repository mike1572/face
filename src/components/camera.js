
import React, { useEffect, Fragment, useState, useRef } from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';
import {getRecomPage} from '../redux/dataActions'

// MUI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import * as faceapi from 'face-api.js'
import { Typography } from '@mui/material';


let Camera = (props) => {

    let {data: {homepage}} = props

    const [initializing, setInitializing] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [expressions, setExpressions] = useState({})

    const [play, setPlay] = useState(false)
    const videoRef = useRef()
    const canvasRef= useRef()
    const btnRef = useRef()

    let beginVideo = () => {
        navigator.getUserMedia(
            { video: {}},
            stream => videoRef.current.srcObject = stream, 
            error => console.log(error)
        )
    }

    useEffect(()=> {


        let interval = setInterval(async () => {
            if (initializing){
                setInitializing(false)
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)


            const displaySize = { width: videoRef.current.offsetWidth, height: videoRef.current.offsetHeight }
            if (displaySize.width > 645){
                displaySize.width = 645
            }
    
            faceapi.matchDimensions(canvasRef.current, displaySize)
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvasRef.current.getContext('2d').clearRect(0, 0, videoRef.current.offsetWidth, videoRef.current.offsetHeight)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
            
    
            if (detections.length !== 0 && detections[0].expressions !== undefined && detections[0].expressions.length !== 0){
                setButtonDisabled(false)
                console.log(detections[0].expressions)
                // show visibility of video
                videoRef.current.style.visibility = 'visible'
                btnRef.current.style.visibility = 'visible'
            } else {
                videoRef.current.style.visibility = 'hidden'
                btnRef.current.style.visibility = 'hidden'
                setButtonDisabled(true)
            }

        }, 500)
     

        if (!play){
            clearInterval(interval)
        }
                    
    }, [play])

    let handlePlayingVideo = () => {
        setPlay(true)
    }


    useEffect(()=> {

        if (homepage){
   
            let getModels = async () => {
                const URL = process.env.PUBLIC_URL + '/models'
                setInitializing(true)
                Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(URL),
                    faceapi.nets.faceLandmark68Net.loadFromUri(URL),
                    faceapi.nets.faceRecognitionNet.loadFromUri(URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(URL)
                ]).then(beginVideo)
            }

            getModels()
  
        } else {

        }


    }, [homepage])

    let handleClick = () => {
        setPlay(false)
        props.getRecomPage(expressions)
        setExpressions({})
    }


    return (
        <Fragment>

            <Typography textAlign='center'
                variant="h5"
                color="secondary"
                sx={{mt: 2}}
            >
                {initializing? 'Loading Model' : "Model Ready!"}
            </Typography>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <video ref={videoRef} width="100%" height="100%" autoPlay muted style={{maxHeight: 450, marginTop: 15}} onPlay={handlePlayingVideo}></video>
                <canvas ref={canvasRef} style={{position: 'absolute', maxHeight: 450}}/>
            </div>
    
            <Box textAlign='center' sx={{mt: 3, mb: 5, display: 'flex', flexDirection: 'column'}}>
 
                <Button 
                    style={{margin: 'auto'}} 
                    color="primary" 
                    variant="contained"
                    type="submit"
                    onClick={handleClick}
                    disabled={buttonDisabled}
                    ref={btnRef}

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
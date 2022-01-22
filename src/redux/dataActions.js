import * as faceapi from 'face-api.js';
import { DrawFaceLandmarksOptions } from 'face-api.js/build/commonjs/draw'
import {
    SWITCH_PAGE
} from './types'

export const getRecomPage = (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: false
    })
}

export const getHomePage = (dispatch) => {
    dispatch({
        type: SWITCH_PAGE,
        payload: true
    })
}

export const videoListener = () => {
    const video = document.getElementById('video')
    video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)
        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 100)
    })
}

export const loadModels = async () => {
    const MODEL_URL = process.env.PUBLIC_URL + '/models'
    const input = document.getElementById('video')

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
    let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
    fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions, { width: input.width, height: input.height })

    return faceapi.draw.drawDetections(input, fullFaceDescriptions)
}

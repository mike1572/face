import { faceapi } from 'face-api.js'
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

export const loadModels = async () => {
    const MODEL_URL = '/models'
    const input = document.getElementById('video')

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
    let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
    fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions, { width: input.width, height: input.height })

    return faceapi.draw.drawDetections(input, fullFaceDescriptions)
}

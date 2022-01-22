
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';

let Camera = (props) => {

    useEffect(()=> {
        let video = document.getElementById('video')
        navigator.getUserMedia(
            { video: {}},
            stream => video.srcObject = stream, 
            error => console.log(error)
        )
    }, [])

    return (
        <video id="video" width="720" height="
        560" autoPlay muted></video>
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
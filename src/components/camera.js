
import React from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';

let Camera = (props) => {

    return (
        <h1>
            hi
        </h1>
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
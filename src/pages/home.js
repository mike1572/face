

import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import Camera from '../components/camera'

//Redux
import {connect} from 'react-redux';


let Home = (props) => {

    let {data: {homepage, about}} = props

    return (
        <Camera/>
    )

            
}


Home.propTypes = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}


export default connect(mapStateToProps, mapActionsToProps)(Home);



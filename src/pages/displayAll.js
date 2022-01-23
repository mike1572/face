// React
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

// Pages
import Home from './home'
import Recom from './recom'
import About from './about'

// Redux
import {connect} from 'react-redux';

let DisplayAll = (props) => {

    let {data: {about}} = props
    
    return (

        <Fragment>
            <About/>
            <Home/>
            <Recom/>
        </Fragment>
    )

}


DisplayAll.propTypes = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(DisplayAll);
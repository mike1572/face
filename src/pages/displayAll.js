
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import Home from './home'
import Recom from './recom'
import About from './about'

// Redux
import {connect} from 'react-redux';

let DisplayAll = (props) => {

    let {data: {about}} = props
    
  
    if (about){
        return (
            <About/>
        )
    } else {
        return (
            <Fragment>
                <Home/>
                <Recom/>
            </Fragment>
        )
    }
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


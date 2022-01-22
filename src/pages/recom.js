

import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';

let Recom = (props) => {

    let {data: {homepage}} = props

    useEffect(()=> {




    }, [])


    if (!homepage){
        return (
            <Fragment>
                <h1>Recommendations Page</h1>
              
            </Fragment>
         
        )
    } else{
        return (
            <Fragment></Fragment>
        )
    }

}

Recom.propTypes = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}


export default connect(mapStateToProps, mapActionsToProps)(Recom);

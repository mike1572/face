
import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import {connect} from 'react-redux'

let About = (props) => {

    let {data: {about}} = props;

    if (about){
        return (
            <Card sx={{ maxWidth: 445, alignItems: 'center', mx: 'auto', mt: 5, fontSize: 13}} raised >
            <CardHeader
                title={`ABOUT US`}
                style={{fontWeight: 'bold'}}
                titleTypographyProps={{variant:'h4' }}
            />
                <CardContent>
                    <Typography color="primary" fontSize={19}>
                        Built as part of McHacks 9, this project recommends you music found on Youtube
                        based on your current mood using facial expression detection.
                    </Typography>
                    <hr/>
                    <Typography  color="secondary" fontSize={17}>
                        Developped with React, Redux, Material UI, Face Api, Youtube Api, and Firebase
                    </Typography>
                </CardContent>
            </Card>
        )
    } else {
        return (<Fragment></Fragment>)
    }

}

About.propTypes = {
    data: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {

}


export default connect(mapStateToProps, mapActionsToProps)(About);
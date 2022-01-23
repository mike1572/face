
import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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
                <CardActions>
                    <a href="https://github.com/mike1572/face" rel="noreferrer" target="_blank" style={{color: 'black'}}>
                        <Tooltip title="https://github.com/mike1572/face" placement="bottom" arrow>
                            <GitHubIcon color='inherit' sx={{mr: -0.5, ml: 1, mb: 1}}  />  
                        </Tooltip>
                    </a>
                    
              
                </CardActions>
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
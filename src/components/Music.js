
import React from 'react'
import PropTypes from 'prop-types'

//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';


let Music = (props) => {
    
    return (
        <Grid item xs={12} md={12} lg={6}>
            <Card sx={{ maxWidth: 545, maxHeight: 600, alignItems: 'center', mx: 'auto', mt: 5, fontSize: 13}} raised>
                <CardMedia
                    component={'iframe'}
                    height='100%'
                    src={`https://www.youtube.com/embed/${props.id}?rel=0`}
                    style={{position: 'relative', minHeight: 330 }}
                    alt="Youtube Music Video" 
                />
            </Card>
        </Grid>
    )
}

Music.propTypes = {
    id: PropTypes.string.isRequired
}


export default Music;
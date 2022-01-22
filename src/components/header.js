
import React from 'react'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

let Header = () => {

    return (
        <AppBar position="static" style={{alignItems: 'center'}} >
            
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                    >
                        Smile
                    </Typography>
                </Toolbar>
           
        </AppBar>
    )
}

export default Header;
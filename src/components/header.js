
import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Redux
import {connect} from 'react-redux';
import {updateAbout} from '../redux/dataActions'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{justifyContent: 'center', alignItems: 'center'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

let Header = (props) => {
  const [value, setValue] =useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.updateAbout(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} /> 
        </Tabs>
      </Box>
    </Box>
  );
}


Header.propTypes = {
    data: PropTypes.object.isRequired,
    updateAbout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    updateAbout
}


export default connect(mapStateToProps, mapActionsToProps)(Header);





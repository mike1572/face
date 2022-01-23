import React, {Fragment} from 'react';
import PropTypes from 'prop-types'


//Redux
import {connect} from 'react-redux';

const {google} = require('googleapis');

export function loadClient() {
    google.client.setApiKey("AIzaSyApBfZ6G7AIYwcmOZYI99l_YtsMZ-_vDFs");
    return google.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
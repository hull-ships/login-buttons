'use strict';

import _ from 'lodash';

const _settings = {
  primaryColor: '#fa5400',

  blackColor: '#222222',
  grayDarkerColor: '#555555',
  grayDarkColor: '#dddddd',
  grayColor: '#D8D8D8',
  grayLightColor: '#e5e5e5',
  grayLighterColor: '#fdfdfd',
  whiteColor: '#ffffff',

  facebookColor: '#3b5998',
  foursquareColor: '#0732a2',
  githubColor: '#333333',
  googleColor: '#dd4b39',
  amazonColor: '#FFCC66',
  instagramColor: '#3f729b',
  linkedinColor: '#0976b4',
  soundcloudColor: '#ff8800',
  tumblrColor: '#35465c',
  twitterColor: '#55acee',
  vkontakteColor: '#45668e',

  textColor: '#aaaaaa',
  linkColor: '#aaaaaa',

  defaultFontSize: 14,
  defaultFontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  defaultLineHeight: 1.6,
  defaultBorderRadius: 3,
  mediumBorderRadius: 6,
};

function setSettings(settings) {
  _.each(settings, function(v, k) {
    if (!!v) { _settings[k] = v; }
  });
}

function getSettings() {
  return _settings;
}

export default {
  setSettings,
  getSettings,
};


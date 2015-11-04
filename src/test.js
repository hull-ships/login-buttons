import React from 'react';
import ReactDOM from 'react-dom';
import { start, I18n } from './lib';
import Main from './main';
import en from './locales/en.json';

function onReady(hull, user, platform, organization) {
  const deployment = platform.deployments[0];
  deployment.organization = organization;

  const element = document.querySelector('#ship');

  I18n.setTranslations({ en });

  deployment.ship.settings = {
    ...deployment.ship.settings,
    button_border_radius: 10,
  };

  const engine = start(deployment, hull);
  ReactDOM.render(<Main engine={engine} actions={engine.getActions()} />, element);
}

Hull.ready(onReady);

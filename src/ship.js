import React from 'react';
import ReactDOM from 'react-dom';
import { start, I18n } from './lib';
import Main from './main';

Hull.onEmbed(document, function boostrap(element, deployment, hull) {
  I18n.setTranslations(deployment.ship.translations);

  const engine = start(deployment, hull);
  ReactDOM.render(<Main engine={engine} actions={engine.getActions()} />, element);
});

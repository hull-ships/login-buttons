import React from 'react';
import Engine from './engine';
import Buttons from './buttons.jsx';

function bootstrap(element, deployment) {
  var engine = new Engine(deployment);

  React.render(<Buttons engine={engine} />, element);
}

export default bootstrap;


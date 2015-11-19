import Engine from 'hull-login/src/lib/engine';
import Mixins from './mixins';
import Utils from './utils';
import I18n from './i18n';

function start(deployment, hull) {
  const engine = new Engine(deployment, hull);

  I18n.setTranslations(deployment.ship.translations);

  if (deployment.onUpdate && typeof deployment.onUpdate === 'function') {
    deployment.onUpdate(function(ship) {
      I18n.setTranslations(ship.translations);
      engine.updateShip(ship);
    });
  }
  return engine;
}

export default {
  start,
  Engine,
  Mixins,
  I18n,
  Utils,
};

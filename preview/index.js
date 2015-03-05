import manifest from '../manifest.json';
import translations from '../ship/locales/en.json';
import bootstrap from '../ship/bootstrap';

var c = {
  appId: manifest.demoKeys.appId,
  orgUrl: manifest.demoKeys.orgUrl,
  jsUrl: 'https://d3f5pyioow99x0.cloudfront.net/6f8ac94d95c42b46661ec3c10d1258e3e956e40c/hull.js'
};

Hull.init(c, function(hull, me, ship, organization) {
  if (ship.type !== 'ship') {
    var e = new Error('Object with id: ' + ship.id + ' is not a ship');

    throw e;
  }

  ship.manifest = manifest;
  ship.translations = { en: translations };

  var deployment = {
    ship: ship,

    platform: {},

    settings: {
      $selector: '#ship'
    }
  };

  // TODO use Hull.embed
  bootstrap(document.querySelector(deployment.settings.$selector), deployment);
});


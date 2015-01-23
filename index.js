var React = require('react');
var Engine = require('./engine');
var Buttons = require('./buttons');

Hull.onEmbed(document, function(element, options) {
  var engine = new Engine(options);

  React.render(<Buttons engine={engine} />, element);
});


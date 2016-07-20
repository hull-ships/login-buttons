import React from 'react';
import cssModules from 'react-css-modules';
import styles from './main.css';
import SocialButtons from './components/social-buttons';
import TranslatedMessage from './components/translated-message';
import Styles from './components/styles';
import { Utils } from './lib';

const HullLogin = React.createClass({
  displayName: 'HullLoginButtonsShip',

  propTypes: {
    engine: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
  },

  getInitialState() {
    return this.props.engine.getState();
  },

  componentWillMount() {
    this.preloadImages();
    this.props.engine.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    this.props.engine.removeChangeListener(this._onChange);
  },

  preloadImages() {
    const ship = this.state.ship;
    if (ship && ship.manifest && ship.manifest.settings) {
      ship.manifest.settings.map((s) => {
        if (s && s.format === 'image') {
          const imageUrl = this.state.shipSettings[s.name];
          if (imageUrl) {
            Utils.preloadImage(imageUrl);
          }
        }
      });
    }
  },

  _onChange() {
    this.setState(this.props.engine.getState());
  },

  renderUserStyles() {
    return !this.state.shipSettings.custom_styles ? null : <style dangerouslySetInnerHTML={{__html: this.state.shipSettings.custom_styles}}></style>;
  },

  render() {
    return (
      <div styleName="ship">
        <Styles scope={this.props.styles.ship} styles={this.props.styles} settings={this.state.shipSettings} />
        {this.renderUserStyles()}
        <SocialButtons {...this.state} {...this.props.actions} />
        <TranslatedMessage message="footer" tag="p" fallback="" />
      </div>
    );
  },
});

export default cssModules(HullLogin, styles);

import React from 'react';
import { translate } from '../../lib/i18n';
import Button from '../button';
import Icon from '../icon';
import ErrrorMessage from '../error';
import TranslatedMessage from '../translated-message';
import { hasTranslation } from '../../lib/i18n';

import cssModules from 'react-css-modules';
import styles from './social-buttons.css';

export default function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const SocialButtons = React.createClass({
  propTypes: {
    errors: React.PropTypes.object,
    styles: React.PropTypes.object,
    user: React.PropTypes.object,
    providers: React.PropTypes.array,
    activeSection: React.PropTypes.string,
    isWorking: React.PropTypes.bool,
  },

  getErrorMessage() {
    const { signUp, logIn, linkIdentity, unlinkIdentity } = this.props.errors;
    const error = signUp || logIn || linkIdentity || unlinkIdentity;

    if (error && error.provider && error.provider !== 'classic') {
      const { reason, message } = error;
      let errorMessage;
      if (reason) {
        const msg = 'social-login error ' + reason;
        if (hasTranslation(msg)) {
          errorMessage = <TranslatedMessage message={msg} variables={error} />;
        } else {
          errorMessage = message || reason;
        }
      } else {
        errorMessage = message;
      }
      return errorMessage;
    }
  },

  renderButton(provider) {
    let actionName;
    let status;
    let button;
    if (!this.props.user) {
      actionName = 'logIn';
      status = 'isLoggingIn';
      button = ['log-in social button text', 'logging-in social button text'];
    } else if (provider.isLinked && provider.isUnlinkable) {
      actionName = 'unlinkIdentity';
      status = 'isUnlinking';
      button = ['unlink social button text', 'unlinking social button text'];
    } else if (!provider.isLinked) {
      actionName = 'linkIdentity';
      status = 'isLinking';
      button = ['link social button text', 'linking social button text'];
    } else {
      return null;
    }

    const m = this.props[status] === provider.name ? button[1] : button[0];
    const providerName = capitalize(provider.name);
    const wording = translate(m, { provider: providerName });
    const handler = this.props[actionName].bind(null, provider.name);

    return (
      <span key={provider.name}>
        <Button kind={provider.name} block disabled={this.props.isWorking} onClick={handler}>
          <Icon name={provider.name} colorize/>
          {wording}
        </Button>
      </span>
    );
  },

  renderErrors() {
    const errorMessage = this.getErrorMessage();
    if (errorMessage) {
      return <ErrrorMessage>{errorMessage}</ErrrorMessage>;
    }
  },

  render() {
    const { providers } = this.props;
    const buttons = providers && providers.map(this.renderButton, this);
    return (
      <div styleName="submit">
        {this.renderErrors()}
        {buttons}
      </div>
    );
  },
});

export default cssModules(SocialButtons, styles);

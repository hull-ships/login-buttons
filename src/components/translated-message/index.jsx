import React from 'react';
import { translate } from '../../lib/i18n';

// Inspired by/modified version of
// https://github.com/yahoo/react-intl/blob/master/src/components/html-message.js
export default React.createClass({
  displayName: 'TranslatedMessage',

  propTypes: {
    message: React.PropTypes.string.isRequired,
    variables: React.PropTypes.object,
    tag: React.PropTypes.string,
    allowHTML: React.PropTypes.bool,
    className: React.PropTypes.string,
    fallback: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      variables: {},
      tag: 'span',
      allowHTML: true, // TODO read from settings
    };
  },

  render() {
    const translation = translate(this.props.message, this.props.variables, this.props.fallback);

    if (!translation) {
      return null;
    }

    let rtn;
    if (this.props.allowHTML) {
      const props = {
        className: this.props.className,
        dangerouslySetInnerHTML: {
          __html: translation, // TODO DOMPurify
        },
        ...this.props,
      };
      rtn = React.createElement(this.props.tag, props);
    } else {
      const props = {className: this.props.className, ...this.props};
      rtn = React.createElement(this.props.tag, props, translation);
    }

    return rtn;
  },
});

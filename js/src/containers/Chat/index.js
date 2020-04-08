import React from 'react';
import PropTypes from 'prop-types';

class Chat extends React.Component {
  render() {
    return <div className={this.props.className} />;
  }
}

Chat.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Chat;

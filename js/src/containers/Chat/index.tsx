import * as React from 'react';

interface Props {
  className: string;
}

class Chat extends React.Component<Props> {
  render() {
    return <div className={this.props.className} />;
  }
}

export default Chat;

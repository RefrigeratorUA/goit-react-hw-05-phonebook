import React, { Component } from 'react';

class Notification extends Component {
  state = {
    nodeRef: this.props.nodeRef,
    errorMessage: this.props.message,
  };
  componentDidMount() {
    const { onView } = this.props;
    setTimeout(() => onView('', false), 2000);
  }

  render() {
    const { nodeRef, errorMessage } = this.state;
    return (
      <div className="alert" ref={nodeRef}>
        {errorMessage}
      </div>
    );
  }
}

export default Notification;

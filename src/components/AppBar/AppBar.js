import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from '../Logo';
import Notification from '../Notification';
import './AppBar.css';

const AppBar = ({ message, onView, isShow }) => {
  const nodeRef = React.useRef(null);
  return (
    <header className="AppBar-wrapper">
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        appear={true}
        classNames="AppBar-logo"
        timeout={500}
        unmountOnExit
      >
        <Logo nodeRef={nodeRef} />
      </CSSTransition>

      <CSSTransition
        nodeRef={nodeRef}
        in={isShow}
        classNames="AppBar-notification"
        timeout={250}
        unmountOnExit
      >
        <Notification onView={onView} message={message} nodeRef={nodeRef} />
      </CSSTransition>
    </header>
  );
};

export default AppBar;

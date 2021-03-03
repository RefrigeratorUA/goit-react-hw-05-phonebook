import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PhonebookListItem from '../PhonebookListItem';
import styles from './PhonebookList.module.css';

const PhonebookList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul" className="list">
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <PhonebookListItem name={name} number={number} id={id} onDelete={onDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onDelete: PropTypes.func,
};

export default PhonebookList;

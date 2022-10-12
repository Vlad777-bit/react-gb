import React from 'react';
import styles from './Message.module.scss';

export const Message = ({ msg, ...props }) => {
  return (
    <p className={styles.message} {...props}>
      {msg}
    </p>
  );
};

import React, { FC } from 'react';
import styles from './Message.module.scss';
import { MessageProps } from './Message.props';

export const Message: FC<MessageProps> = ({ msg, ...props }) => {
  return (
    <p className={styles.message} {...props}>
      {msg}
    </p>
  );
};

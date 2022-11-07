import React, { FC } from 'react';
import styles from './MessageItem.module.scss';
import { MessageItemProps } from './MessageItem.props';

export const MessageItem: FC<MessageItemProps> = ({ msg, ...props }) => {
  return (
    <li className={styles.message} {...props}>
      <div className={styles.header}>
        <span>{msg.author}</span>
        <span>{msg.createdAt.toString()}</span>
      </div>
      <p className={styles.body}>{msg.text}</p>
    </li>
  );
};

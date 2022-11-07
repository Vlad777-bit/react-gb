import React, { FC } from 'react';
import styles from './MessagesList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';
import { MessagesListProps } from './MessagesList.props';

export const MessagesList: FC<MessagesListProps> = ({
  messageList,
  ...props
}) => {
  if (!messageList.length) {
    return <h3 className="title">No messages found</h3>;
  }

  return (
    <ul className={styles.messages__list}>
      {messageList.map((msg) => (
        <MessageItem key={msg.id} msg={msg} />
      ))}
    </ul>
  );
};

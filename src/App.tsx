import React, { useEffect, useState } from 'react';
import { Form } from './components';
import { MessagesList } from './components/Message/MessagesList/MessagesList';
import { MessageInterface } from './types/MessageInterface';

export const App = () => {
  const [messageList, setMessageList] = useState<MessageInterface[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messageList[0]?.author) {
        alert(`${messageList[0]?.author} sent a message`);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [messageList]);

  return (
    <div className="container">
      <h1 className="title">Lesson 2</h1>
      <Form setMessageList={setMessageList} />

      <h2 className="title">Message list</h2>
      <MessagesList messageList={messageList} />
    </div>
  );
};

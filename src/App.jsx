import { Message, UsersList } from './components/index.ts';

export const App = () => {
  const messageText = 'Some text';

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Message msg={messageText} />
      <hr />
      <UsersList />
    </div>
  );
};

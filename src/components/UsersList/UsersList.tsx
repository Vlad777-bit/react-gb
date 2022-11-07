import React, { FC, useState } from 'react';
import { CustomButton, CustomInput } from '../UI';
import styles from './UsersList.module.scss';
import { UsersListProps } from './UsersList.props';

export const UsersList: FC<UsersListProps> = ({ ...props }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Devid' },
    { id: 3, name: 'Lana' },
  ]);

  const [newUser, setNewUser] = useState('');

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault()
    const user = {
      id: Date.now(),
      name: newUser,
    };

    if (!user.name) {
      return;
    }

    setUsers([...users, user]);
    setNewUser('');
  };

  const deleteUserHandle = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <form onSubmit={addNewUser}>
        <CustomInput
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <CustomButton>Add</CustomButton>
      </form>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{' '}
            <button onClick={() => deleteUserHandle(user.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

import React, { useContext } from 'react';

import CreateUser from './CreateUser';
import User from './User';

import { UsersContext } from './UsersContext';

import './Users.scss';

const Users = () => {
  const { users, createUser, updateUser } = useContext(UsersContext);

  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser onCreateUser={createUser} />
      {users.map(user => (
        <User key={user.id} user={user} onUpdateUser={updateUser} />
      ))}
    </section>
  );
};

export default Users;

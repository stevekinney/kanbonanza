import React from 'react';

import CreateUser from './CreateUser';
import User from './User';

import './Users.scss';

const Users = ({ users  }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser onCreateUser={() => {}} />
      {users.map(user => (
        <User key={user.id} user={user} onUpdateUser={() => {}} />
      ))}
    </section>
  );
};

export default Users;

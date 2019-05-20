import React from 'react';

import User from './User';
import CreateUserContainer from '../containers/CreateUserContainer';

import './Users.scss';


const Users = ({ users  }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />
      {users.map(user => (
        <User key={user.id} user={user} onUpdateUser={() => {}} />
      ))}
    </section>
  );
};

export default Users;

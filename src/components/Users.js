import React from 'react';

import CreateUserContainer from '../containers/CreateUserContainer';

import './Users.scss';
import UserContainer from '../containers/UserContainer';


const Users = ({ users }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />
      {users.map(userId => (
        <UserContainer key={userId} userId={userId} />
      ))}
    </section>
  );
};

export default Users;

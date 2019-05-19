import React, { Component } from 'react';
import { UsersContext } from './UsersContext';

const withUsers = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <UsersContext.Consumer>
          {({ users, createUser, updateUser }) => (
            <WrappedComponent
              users={users}
              createUser={createUser}
              updateUser={updateUser}
              {...this.props}
            />
          )}
        </UsersContext.Consumer>
      );
    }
  };
}

export default withUsers;

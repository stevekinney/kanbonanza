import React, { Component, createContext } from 'react';
import { users } from './default-state';

export const UsersContext = createContext();

export class UsersProvider extends Component {
  state = { users };

  createUser = user => {
    let { users } = this.state;

    users = [...users, { ...user, id: Date.now().toString() }];

    this.setState({ users });
  };

  updateUser = targetUser => {
    let { users } = this.state;

    users = users.map(user => {
      if (user.id === targetUser.id) {
        return { ...user, name: targetUser.name };
      }
      return user;
    });

    this.setState({ users });
  };

  render() {
    const { updateUser, createUser } = this;
    const { users } = this.state;

    return (
      <UsersContext.Provider value={{ users, createUser, updateUser }}>
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}

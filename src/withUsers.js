import React, { Component } from 'react';
import { users } from './default-state.json';

class WithUsers extends Component {
    state = { users };

    createUser = user => {
      const { users } = this.state;
      this.setState({
        users: [...users, { ...user, id: Date.now().toString() }]
      });
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
      const { createUser, updateUser } = this;
      const { users } = this.state;

      return (
        <div>
          {this.props.children({ users, createUser, updateUser })}
        </div>
      );
    }
  }

export default WithUsers;

import React, { Component } from 'react';
import UserStore from './UsersStore';

class WithUsers extends Component {
    state = { users: UserStore.users };

    componentDidMount() {
      this.unsubscribe = UserStore.on('change', (users) => this.setState({ users }));
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const { createUser, updateUser } = UserStore;
      const { users } = this.state;

      return (
        <div>
          {this.props.children({ users, createUser, updateUser })}
        </div>
      );
    }
  }

export default WithUsers;

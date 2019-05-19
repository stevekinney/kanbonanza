import React, { Component } from 'react';
import UserStore from './UserStore';

const withUsers = (WrappedComponent) => {
  return class extends Component {
    state = { users: UserStore.users };

    componentDidMount() {
      this.unsubscribe = UserStore.on('change', (users) => this.setState({ users }));
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const { users } = this.state;

      return (
        <WrappedComponent
          users={users}
          createUser={UserStore.createUser}
          updateUser={UserStore.updateUser}
          {...this.props}
        />
      );
    }
  };
}

export default withUsers;

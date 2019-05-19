import React, { Component } from 'react';
import UserStore from './UserStore';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withUsers = (WrappedComponent) => {
  class WithUsers extends Component {
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
  WithUsers.displayName = `WithUsers(${getDisplayName(WrappedComponent)})`;
  return WithUsers;
}

export default withUsers;

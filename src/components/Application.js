import React, { Component } from 'react';

import Lists from './Lists';
import Users from './Users';


import './Application.scss';
import CreateListContainer from '../containers/CreateListContainer';

class Application extends Component {
  render() {
    const { lists, users } = this.props;

    return (
      <main className="Application">
        <Users
          users={users}
          onCreateUser={this.createUser}
        />
        <section className="list-management">
          <CreateListContainer />
          <Lists
            lists={lists}
            users={users}
          />
        </section>
      </main>
    );
  }
}

export default Application;

import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';
import Users from './Users';

import './Application.scss';

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
          <CreateList onCreateList={this.createList} />
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

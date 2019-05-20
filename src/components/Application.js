import React, { Component } from 'react';

import CreateListContainer from '../containers/CreateListContainer';
import UsersContainer from '../containers/UsersContainer';
import ListsContainer from '../containers/ListsContainer';

import './Application.scss';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <UsersContainer />
        <section className="list-management">
          <CreateListContainer />
          <ListsContainer />
        </section>
      </main>
    );
  }
}

export default Application;

import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';
import Users from './Users';

import defaultState from './default-state.json';

import './Application.scss';

class Application extends Component {
  state = defaultState;

  createList = ({ title }) => {
    const { lists } = this.state;

    const list = {
      cards: [],
      id: Date.now().toString(),
      title
    };

    this.setState({ lists: [...lists, list] });
  };

  removeList = targetList => {
    let { lists } = this.state;

    lists = lists.filter(list => list.id !== targetList.id);

    this.setState({ lists });
  };

  createCard = (targetList, { title, description }) => {
    let { lists } = this.state;
    const card = { id: Date.now().toString(), title, description };

    lists = lists.map(list => {
      if (list.id === targetList.id) {
        return { ...list, cards: [...list.cards, card] };
      }
      return list;
    });

    this.setState({ lists });
  };

  removeCard = (targetList, card) => {
    let { lists } = this.state;
    const remainingCards = targetList.cards.filter(({ id }) => id !== card.id);
    const updatedList = { ...targetList, cards: remainingCards };

    lists = lists.map(list => {
      return list.id === targetList.id ? updatedList : list;
    });

    this.setState({ lists });
  };

  changeList = (targetCard, newListId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      let newCards;
      if (list.id === newListId) {
        newCards = [...list.cards, targetCard];
      } else {
        newCards = list.cards.filter(card => card.id !== targetCard.id);
      }
      return { ...list, cards: newCards };
    });

    return this.setState({ lists });
  };

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

  assignCard = (targetCard, targetUserId) => {
    let { lists, users } = this.state;
    const targetUser = users.find(user => user.id === targetUserId);

    lists = lists.map(list => {
      if (!list.cards.includes(targetCard)) {
        return list;
      }

      const cards = list.cards.map(card => {
        if (card.id === targetCard.id) {
          if (!targetUser) return { ...card, assignedTo: '' };
          return { ...card, assignedTo: { ...targetUser } };
        }
        return card;
      });

      return { ...list, cards };
    });

    this.setState({ lists });
  };

  render() {
    const { lists, users } = this.state;

    return (
      <main className="Application">
        <Users
          users={users}
          onCreateUser={this.createUser}
          onUpdateUser={this.updateUser}
        />
        <section className="list-management">
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            users={users}
            onAssignCard={this.assignCard}
            onCreateCard={this.createCard}
            onListChange={this.changeList}
            onRemoveCard={this.removeCard}
            onRemoveList={this.removeList}
          />
        </section>
      </main>
    );
  }
}

export default Application;

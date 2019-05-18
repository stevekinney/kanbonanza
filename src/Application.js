import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

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

  render() {
    const { lists } = this.state;

    return (
      <main className="Application">
        <CreateList onCreateList={this.createList} />
        <Lists
          lists={lists}
          onCreateCard={this.createCard}
          onListChange={this.changeList}
          onRemoveCard={this.removeCard}
          onRemoveList={this.removeList}
        />
      </main>
    );
  }
}

export default Application;

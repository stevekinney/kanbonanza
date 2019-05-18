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

  removeList = list => {
    let { lists } = this.state;

    lists = lists.filter(l => l.id !== list.id);

    this.setState({ lists });
  };

  createCard = (list, { title, description }) => {
    let { lists } = this.state;
    const card = { id: Date.now().toString(), title, description };

    lists = lists.map(l => {
      if (l.id === list.id) {
        return { ...l, cards: [...l.cards, card] };
      }
      return l;
    });

    this.setState({ lists }, (state) => console.log(JSON.stringify(this.state)));
  };

  removeCard = (list, card) => {
    let { lists } = this.state;
    const remainingCards = list.cards.filter(({ id }) => id !== card.id);
    const updatedList = { ...list, cards: remainingCards };

    lists  = lists.map(l => {
      return l.id === list.id ? updatedList : l;
    });

    this.setState({ lists });
  };

  changeList = (card, newListId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      let newCards;
      if (list.id === newListId) {
        newCards = [...list.cards, card];
      } else {
        newCards = list.cards.filter(c => c.id !== card.id);
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

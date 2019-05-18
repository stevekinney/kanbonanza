import React, { Component } from 'react';

import CreateCard from './CreateCard';
import Card from './Card';

import './List.scss';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  render() {
    const {
      list,
      lists,
      onCreateCard,
      onListChange,
      onRemoveList,
      onRemoveCard
    } = this.props;
    const { showOptions } = this.state;
    const removeList = () => onRemoveList(list);

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCard onCreateCard={card => onCreateCard(list, card)} />
            <button className="List-remove danger" onClick={removeList}>
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
        <div>
          {list.cards.map(card => (
            <Card
              card={card}
              key={card.id}
              list={list}
              lists={lists}
              onListChange={onListChange}
              onRemoveCard={onRemoveCard}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default List;

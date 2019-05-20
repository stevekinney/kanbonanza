import React, { Component } from 'react';

import CreateCardContainer from '../containers/CreateCardContainer';
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
      users
    } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCardContainer listId={list.id} />
            <button className="List-remove danger" onClick={() => {}}>
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
              users={users}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default List;

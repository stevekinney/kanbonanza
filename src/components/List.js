import React, { Component } from 'react';

import CreateCardContainer from '../containers/CreateCardContainer';

import './List.scss';
import CardContainer from '../containers/CardContainer';


class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  removeList = () => {
    this.props.removeList(this.props.list.id);
  };

  render() {
    const {
      list,
    } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCardContainer listId={list.id} />
            <button className="List-remove danger" onClick={this.removeList}>
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
          {list.cards.map(cardId => (
            <CardContainer
              cardId={cardId}
              listId={list.id}
              key={cardId}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default List;

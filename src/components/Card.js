import React, { Component } from 'react';
import CardAssignmentContainer from '../containers/CardAssignmentContainer';

import './Card.scss';
import CardMoveContainer from '../containers/CardMoveContainer';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = (event) => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(card, newListId);
  };

  render() {
    const { card, listId, removeCard } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        <CardAssignmentContainer cardId={card.id} />
        {showOptions && (
          <div className="Card-options">
            <CardMoveContainer cardId={card.id} listId={listId} />
            <button onClick={removeCard} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;

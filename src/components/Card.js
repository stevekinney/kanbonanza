import React, { Component } from 'react';
import CardAssignment from './CardAssignment';

import './Card.scss';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = event => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(card, newListId);
  };

  render() {
    const { card, lists, list, users  } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        <CardAssignment card={card} users={users} onAssignCard={() => {}} />
        {showOptions && (
          <div className="Card-options">
            <select
              className="Card-move"
              onChange={this.handleChange}
              value={list.id}
            >
              {lists.map(list => (
                <option value={list.id} key={list.id}>
                  {list.title}
                </option>
              ))}
            </select>
            <button onClick={() => {}} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <button
          className="Card-toggle"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;

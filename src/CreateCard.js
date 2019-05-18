import React, { Component } from 'react';

import './CreateCard.scss';

class CreateCard extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreateCard } = this.props;

    if (onCreateCard) {
      onCreateCard(this.state);
    }

    this.setState({
      title: '',
      description: ''
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <form className="CreateCard" onSubmit={this.handleSubmit}>
        <input
          className="CreateCard-title"
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          className="CreateCard-description"
          onChange={this.handleChange}
          placeholder="Description"
          name="description"
          type="text"
          value={description}
        />
        <input className="CreateCard-submit" type="submit" value="Create New Card" />
      </form>
    );
  }
}

export default CreateCard;

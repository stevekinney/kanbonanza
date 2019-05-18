import React, { Component } from 'react';

import './CreateList.scss';

class CreateList extends Component {
  state = { title: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreateList } = this.props;

    if (onCreateList) {
      onCreateList(this.state);
    }

    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form className="CreateList" onSubmit={this.handleSubmit}>
        <input
          className="CreateList-title"
          id="CreateList-title"
          name="title"
          onChange={this.handleChange}
          placeholder="New List Title"
          value={title}
        />
        <input className="CreateList-submit" type="submit" />
      </form>
    );
  }
}

export default CreateList;

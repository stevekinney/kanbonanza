import React from 'react';
import ListContainer from '../containers/ListContainer';

import './Lists.scss';

const Lists = ({ lists, users }) => {
  return (
    <section className="Lists">
      {lists.map(listId => (
        <ListContainer key={listId} listId={listId} />
      ))}
    </section>
  );
};

export default Lists;

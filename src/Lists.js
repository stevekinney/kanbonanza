import React from 'react';
import List from './List';

import './Lists.scss';

const Lists = ({ lists, onCreateCard, onListChange, onRemoveList, onRemoveCard }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          lists={lists}
          onCreateCard={onCreateCard}
          onListChange={onListChange}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
        />
      ))}
    </section>
  );
};

export default Lists;

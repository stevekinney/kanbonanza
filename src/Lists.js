import React from 'react';
import List from './List';

import './Lists.scss';

const Lists = ({
  lists,
  users,
  onCreateCard,
  onListChange,
  onRemoveList,
  onRemoveCard,
  onAssignCard
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          lists={lists}
          users={users}
          onAssignCard={onAssignCard}
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

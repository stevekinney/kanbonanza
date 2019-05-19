import React from 'react';
import List from './List';

import './Lists.scss';

const Lists = ({
  lists,
  users,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          lists={lists}
          users={users}
        />
      ))}
    </section>
  );
};

export default Lists;

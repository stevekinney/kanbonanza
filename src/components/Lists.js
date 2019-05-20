import React from 'react';
import ListContainer from '../containers/ListContainer';

import './Lists.scss';

const Lists = ({
  lists,
  users,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <ListContainer
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

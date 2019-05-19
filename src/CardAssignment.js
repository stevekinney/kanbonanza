import React from 'react';

const CardAssignment = ({ card, users, onAssignCard = () => {} }) => {
  const assignCard = event => {
    const userId = event.target.value;
    onAssignCard(card, userId);
  };

  const user = users.find(user => user.id === card.assignedTo);
  return (
    <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
      {card.assignedTo ? (
        <p>Card assigned to <strong>{user.name}</strong>.</p>
      ) : (
        <p>Card unassigned.</p>
      )}
      <select
        value={card.assignedTo}
        onChange={assignCard}
      >
        <option value="">(Unassigned)</option>
        {users.map(user => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CardAssignment;

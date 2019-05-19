import React from 'react';

const CardAssignment = ({ card, users, onAssignCard = () => {} }) => {
  const assignCard = event => {
    const userId = event.target.value;
    console.log({ userId });
    onAssignCard(card, userId);
  };

  return (
    <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
      {card.assignedTo ? (
        <p>Card assigned to <strong>{card.assignedTo.name}</strong>.</p>
      ) : (
        <p>Card unassigned.</p>
      )}
      <select
        value={card.assignedTo && card.assignedTo.id}
        onChange={assignCard}
      >
        <option value="">(Unassigned)</option>
        {users.map(user => (
          <option value={user.id} key={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CardAssignment;

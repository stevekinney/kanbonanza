export const LIST_CREATE = 'LIST_CREATE';
export const CARD_CREATE = 'CARD_CREATE';
export const CARD_REMOVE = 'CARD_REMOVE';

export const createList = (data) => {
  return {
    type: LIST_CREATE,
    payload: {
      id: Date.now().toString(),
      cards: [],
      title: '',
      ...data
    }
  };
};

export const createCard = (listId, data) => {
  return {
    type: CARD_CREATE,
    payload: {
      listId,
      id: Date.now().toString(),
      title: '',
      description: '',
      assignedTo: '',
      ...data
    }
  }
}

export const removeCard = (listId, cardId) => {
  console.log('action creator')
  return {
    type: CARD_REMOVE,
    payload: { listId, cardId }
  };
};

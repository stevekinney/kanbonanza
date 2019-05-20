export const LIST_CREATE = 'LIST_CREATE';

export const createList = (data) => {
  return {
    type: LIST_CREATE,
    payload: {
      id: Date.now(),
      cards: [],
      title: '',
      ...data
    }
  };
};

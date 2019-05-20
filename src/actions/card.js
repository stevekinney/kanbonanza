export const CARD_ASSIGN = 'CARD_ASSIGN';
export const CARD_MOVE_TO_LIST = 'CARD_MOVE_TO_LIST';

export const assignCardToUser = (cardId, userId) => {
  console.log('assignCardToUser');
  return {
    type: CARD_ASSIGN,
    payload: {
      userId,
      cardId,
    }
  }
}

export const moveCardToList = (cardId, originListId, destinationListId) => {
  return {
    type: CARD_MOVE_TO_LIST,
    payload: {
      cardId,
      originListId,
      destinationListId,
    }
  }
}

import { lists } from '../normalized-state';

import {
  LIST_CREATE,
  CARD_CREATE,
  CARD_REMOVE,
  LIST_REMOVE,
} from '../actions/list';

import {
  addEntity,
  removeEntity,
  addChildId,
  setPropertyOnEntity,
  removeId,
  moveIdBetweenEntities,
} from './_utilities';

import { CARD_MOVE_TO_LIST } from '../actions/card';

const listsReducer = (state = lists, action) => {
  if (action.type === LIST_CREATE) {
    return addEntity(state, action.payload.list);
  }

  if (action.type === LIST_REMOVE) {
    return removeEntity(state, action.payload.listId);
  }

  if (action.type === CARD_CREATE) {
    const { listId, cardId } = action.payload;
    return addChildId(state, listId, 'cards', cardId);
  }

  if (action.type === CARD_REMOVE) {
    const { listId, cardId } = action.payload;
    const cards = removeId(state.entities[listId].cards, cardId);
    return setPropertyOnEntity(state, listId, 'cards', cards);
  }

  if (action.type === CARD_MOVE_TO_LIST) {
    const { cardId, originListId, destinationListId } = action.payload;
    return moveIdBetweenEntities(
      state,
      originListId,
      destinationListId,
      cardId,
    );
  }

  return state;
};

export default listsReducer;

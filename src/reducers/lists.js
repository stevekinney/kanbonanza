import { lists } from '../normalized-state';

import {
  LIST_CREATE,
  CARD_CREATE,
  CARD_REMOVE,
  LIST_REMOVE,
} from '../actions/list';
import { addEntity, removeEntity } from './_utilities';
import { CARD_MOVE_TO_LIST } from '../actions/card';

const listsReducer = (state = lists, action) => {
  if (action.type === LIST_CREATE) {
    return addEntity(state, action.payload);
  }

  if (action.type === LIST_REMOVE) {
    return removeEntity(state, action.payload.listId);
  }

  if (action.type === CARD_CREATE) {
    const { listId } = action.payload;

    const updatedList = { ...state.entities[listId] };

    updatedList.cards = [...updatedList.cards, action.payload.id];

    return {
      ...state,
      entities: { ...state.entities, [listId]: updatedList },
    };
  }

  if (action.type === CARD_REMOVE) {
    const { listId, cardId } = action.payload;

    const updatedList = { ...state.entities[listId] };

    updatedList.cards = updatedList.cards.filter((id) => id !== cardId);

    const newState = {
      ...state,
      entities: { ...state.entities, [listId]: updatedList },
    };

    return newState;
  }

  if (action.type === CARD_MOVE_TO_LIST) {
    const { cardId, originListId, destinationListId } = action.payload;
    const originList = { ...state.entities[originListId] };
    const destinationList = { ...state.entities[destinationListId] };
    originList.cards = originList.cards.filter((id) => id !== cardId);
    destinationList.cards = destinationList.cards.concat(cardId);

    const newState = {
      ...state,
      entities: {
        ...state.entities,
        [originListId]: originList,
        [destinationListId]: destinationList,
      },
    };

    return newState;
  }

  return state;
};

export default listsReducer;

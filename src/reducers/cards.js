import omit from 'lodash/omit';

import { cards } from '../normalized-state';
import { CARD_CREATE, CARD_REMOVE } from '../actions/list';
import { addEntity } from './_utilities';
import { CARD_ASSIGN } from '../actions/card';

const cardsReducer = (state = cards, action) => {
  if (action.type === CARD_CREATE) {
    return addEntity(state, action.payload);
  }

  if (action.type === CARD_REMOVE) {
    const newState = {
      entities: omit(state.entities, action.payload.cardId),
      ids: state.ids.filter((id) => id !== action.payload.cardId),
    };

    return newState;
  }

  if (action.type === CARD_ASSIGN) {
    const updatedCard = { ...state.entities[action.payload.cardId] };
    updatedCard.assignedTo = action.payload.userId;

    const newState = {
      ...state,
      entities: { ...state.entities, [action.payload.cardId]: updatedCard },
    };

    return newState;
  }

  return state;
};

export default cardsReducer;

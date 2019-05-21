import { cards } from '../normalized-state';
import { CARD_CREATE, CARD_REMOVE } from '../actions/list';
import { addEntity, removeEntity, setPropertyOnEntity } from './_utilities';
import { CARD_ASSIGN } from '../actions/card';

const cardsReducer = (state = cards, action) => {
  if (action.type === CARD_CREATE) {
    return addEntity(state, action.payload.card);
  }

  if (action.type === CARD_REMOVE) {
    const { cardId } = action.payload;
    return removeEntity(state, cardId);
  }

  if (action.type === CARD_ASSIGN) {
    const { cardId, userId } = action.payload;
    return setPropertyOnEntity(state, cardId, 'assignedTo', userId);
  }

  return state;
};

export default cardsReducer;

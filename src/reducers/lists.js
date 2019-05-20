import { lists } from '../default-state';

import { LIST_CREATE, CARD_CREATE, CARD_REMOVE } from '../actions/list';

const listsReducer = (state = lists, action)=> {

  console.log(action);

  if (action.type === LIST_CREATE) {
    return [...state, action.payload ];
  }

  if (action.type === CARD_CREATE) {
    return state.map(list => {
      if (list.id !== action.payload.listId) return list;
      return { ...list, cards: [...list.cards, action.payload] };
    });
  }

  if (action.type === CARD_REMOVE) {
    return state.map(list => {
      if (list.id !== action.payload.listId) return list;
      return { ...list, cards: [...list.cards.filter(card => card.id !== action.payload.cardId)] };
    });
  }

  return state;
}

export default listsReducer;

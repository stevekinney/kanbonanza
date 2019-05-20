import { lists } from '../default-state';

import { LIST_CREATE, CARD_CREATE } from '../actions/list';

const listsReducer = (state = lists, action)=> {

  console.log(action);

  if (action.type === LIST_CREATE) {
    return [...state, action.payload ];
  }

  if (action.type === CARD_CREATE) {
    return lists.map(list => {
      if (list.id !== action.payload.listId) return list;
      return { ...list, cards: [...list.cards, action.payload] };
    });
  }

  return state;
}

export default listsReducer;

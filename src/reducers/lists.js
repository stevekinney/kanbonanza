import { lists } from '../default-state';

const listsReducer = (state = lists, action)=> {

  if (action.type === 'LIST_CREATE') {
    return [...state, {
      id: Date.now().toString(),
      cards: [],
      ...action.payload,
    }];
  }

  return state;
}

export default listsReducer;

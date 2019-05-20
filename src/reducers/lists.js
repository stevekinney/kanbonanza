import { lists } from '../default-state';

import { LIST_CREATE } from '../actions/list';

const listsReducer = (state = lists, action)=> {

  console.log(action);

  if (action.type === LIST_CREATE) {
    return [...state, action.payload ];
  }

  return state;
}

export default listsReducer;

import { users } from '../default-state';
import { USER_CREATE } from '../actions/user';

const usersReducer = (state = users, action)=> {

  if (action.type === USER_CREATE) {
    return [...state, action.payload];
  }

  return state;
}

export default usersReducer;

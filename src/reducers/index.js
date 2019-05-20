import { combineReducers } from 'redux';

import lists from './lists';
import users from './users';
import cards from './cards';

export default combineReducers({
  lists,
  users,
  cards
});

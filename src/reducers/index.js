import { combineReducers } from 'redux';

import lists from './lists';
import users from './users';

export default combineReducers({
  lists,
  users,
});

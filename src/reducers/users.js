import { users } from '../normalized-state';
import { USER_CREATE, USER_UPDATE } from '../actions/user';
import { addEntity, setPropertyOnEntity } from './_utilities';

const usersReducer = (state = users, action) => {
  if (action.type === USER_CREATE) {
    return addEntity(state, action.payload.user);
  }

  if (action.type === USER_UPDATE) {
    const { userId, name } = action.payload;
    return setPropertyOnEntity(state, userId, 'name', name);
  }

  return state;
};

export default usersReducer;

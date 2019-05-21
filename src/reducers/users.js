import { users } from '../normalized-state';
import { USER_CREATE, USER_UPDATE } from '../actions/user';
import { addEntity } from './_utilities';

const usersReducer = (state = users, action) => {
  if (action.type === USER_CREATE) {
    return addEntity(state, action.payload);
  }

  if (action.type === USER_UPDATE) {
    const updatedUser = { ...state.entities[action.payload.id] };
    updatedUser.name = action.payload.name;

    return {
      ...state,
      entities: { ...state.entities, [action.payload.id]: updatedUser },
    };
  }

  return state;
};

export default usersReducer;

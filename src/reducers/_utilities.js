import omit from 'lodash/omit';

export const addEntity = (state, entity) => {
  return {
    entities: { ...state.entities, [entity.id]: entity },
    ids: [...state.ids, entity.id],
  };
};

export const removeEntity = (state, targetId) => {
  return {
    entities: omit(state.entities, targetId),
    ids: state.ids.filter((id) => id !== targetId),
  };
};

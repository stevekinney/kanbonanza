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

export const removeId = (ids, targetId) => {
  return ids.filter((id) => id !== targetId);
};

export const addChildId = (state, entityId, property, childId) => {
  const entityToUpdate = { ...state.entities[entityId] };
  entityToUpdate[property] = entityToUpdate[property].concat(childId);

  return {
    ...state,
    entities: { ...state.entities, [entityId]: entityToUpdate },
  };
};

export const setPropertyOnEntity = (state, entityId, property, value) => {
  const updatedUser = { ...state.entities[entityId] };
  updatedUser[property] = value;

  return {
    ...state,
    entities: { ...state.entities, [entityId]: updatedUser },
  };
};

export const moveIdBetweenEntities = (
  state,
  originId,
  destinationId,
  targetId,
) => {
  const origin = { ...state.entities[originId] };
  const desination = { ...state.entities[destinationId] };
  origin.cards = origin.cards.filter((id) => id !== targetId);
  desination.cards = desination.cards.concat(targetId);

  return {
    ...state,
    entities: {
      ...state.entities,
      [originId]: origin,
      [destinationId]: desination,
    },
  };
};

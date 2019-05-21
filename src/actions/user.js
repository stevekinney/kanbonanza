export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';

export const createUser = (data) => {
  return {
    type: USER_CREATE,
    payload: {
      id: Date.now().toString(),
      name: '',
      email: '',
      ...data,
    },
  };
};

export const updateUser = (id, name) => {
  return {
    type: USER_UPDATE,
    payload: {
      id,
      name,
    },
  };
};

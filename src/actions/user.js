export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';

export const createUser = (data) => {
  const userId = Date.now().toString();
  return {
    type: USER_CREATE,
    payload: {
      userId,
      user: {
        id: Date.now().toString(),
        name: '',
        email: '',
        ...data,
      },
    },
  };
};

export const updateUser = (userId, name) => {
  return {
    type: USER_UPDATE,
    payload: {
      userId,
      name,
    },
  };
};

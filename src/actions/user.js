export const USER_CREATE = 'USER_CREATE';

export const createUser = (data) => {
  return {
    type: USER_CREATE,
    payload: {
      id: Date.now().toString(),
      name: '',
      email: '',
      ...data
    }
  };
};

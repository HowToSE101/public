export const submitLogin = (username, password) => {
  return {
    type: 'SUBMIT_LOGIN',
    username,
    password
  };
};

export const changeUsername = (username) => {
  return {
    type: 'CHANGE_USERNAME',
    username
  };
};

export const changePassword = (password) => {
  return {
    type: 'CHANGE_PASSWORD',
    password
  };
};

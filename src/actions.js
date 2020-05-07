export const update = (payload) => ({
  type: 'UPDATE',
  payload
});

export const set_region = (payload) => ({
  type: 'SET_REGION',
  payload
});

export const choose = (payload) => ({
  type: 'CHOOSE',
  payload
});
export const crutch = (payload) => ({
  type: 'CRUTCH',
  payload
});

export const discard = () => ({ type: 'DISCARD'});

export const set_city = (payload) => ({
  type: 'SET_CITY',
  payload
});

export const set_initial_city = (payload) => ({
  type: 'SET_INITIAL_CITY',
  payload
});

export const reset_initial_city = () => ({
  type: 'RESET_INITIAL_CITY'
});

export const toggle_settings = () => ({
  type: "TOGGLE"
});

export const pull_like = (payload) => ({
  type: "PULL",
  payload
});

export const like_list_true = () => ({
  type: "LIKE_TRUE",
});
export const like_list_false = () => ({
  type: "LIKE_FALSE",
});



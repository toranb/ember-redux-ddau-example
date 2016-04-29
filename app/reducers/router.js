const initialState = {
  path: null,
  params: null
};

export default ((state, action) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        return { ...state, path: action.path, params: action.params };
    }
    return state || initialState;
});

const initialState = {
  location: null
};

export default ((state, action) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        return { ...state, location: action.location }; // jshint ignore:line
    }
    return state || initialState;
});

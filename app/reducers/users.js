import { uniq, remove } from 'example/utilities/array';

const initialState = {
    all: []
};

export default ((state, action) => {
    if (action.type === 'DESERIALIZE_USERS') {
        return Object.assign({}, state, {
            all: uniq(state.all, action.response)
        });
    }
    if (action.type === 'REMOVE_USER') {
        return Object.assign({}, state, {
            all: remove(state.all, action.id)
        });
    }
    return state || initialState;
});

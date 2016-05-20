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
    if (action.type === 'UPDATE_USERNAME') {
        var zz = remove(state.all, 3);
        var mm = zz.concat({id: 3, name: action.name});
        return Object.assign({}, state, {
            all: mm
        });
    }
    if (action.type === 'REMOVE_USER') {
        return Object.assign({}, state, {
            all: remove(state.all, action.id)
        });
    }
    return state || initialState;
});

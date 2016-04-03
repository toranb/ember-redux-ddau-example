import Ember from 'ember';
import route from 'ember-redux/route';
import ajax from 'example/utilities/ajax';

var model = (dispatch) => {
    return ajax('/api/users', 'GET').then(response => dispatch({type: 'DESERIALIZE_USERS', response: response}));
};

var UsersRoute = Ember.Route.extend();

export default route({model})(UsersRoute);

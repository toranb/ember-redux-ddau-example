import Ember from 'ember';
import ajax from 'example/utilities/ajax';

var UsersRoute = Ember.Route.extend({
    redux: Ember.inject.service(),
    model() {
        var redux = this.get('redux');
        return ajax('/api/users', 'GET').then(response => redux.dispatch({type: 'DESERIALIZE_USERS', response: response}));
    }
});

export default UsersRoute;

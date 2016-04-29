import Ember from 'ember';

var JokesRoute = Ember.Route.extend({
    model(params) {
        console.log(params);
        return [];
    }
});

export default JokesRoute;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  redux: Ember.inject.service('redux'),
  location: config.locationType
});

Router.map(function() {
  this.route('users', { path: '/' });
  this.route('hats', { path: '/hats' });
  this.route('jokes', { path: '/jokes/:joke_id' });
});

var isTimeTraveling = false;
var timeTravel = function() {
    var redux = this.get('redux');
    var current = this.currentPath;
    var routerState = redux.getState().router;
    var path = routerState.path;
    var params = routerState.params;
    if(path !== current) {
        isTimeTraveling = true;
        if(Object.keys(routerState.params).length > 0) {
            this.transitionTo(path, params);
        }else{
            this.transitionTo(path);
        }
        Ember.run.next(function() {
            isTimeTraveling = false;
        });
    }
};

Router.reopen({
    sync: function(argz) {
        var redux = this.get('redux');
        redux.subscribe(timeTravel.bind(this));
        if(!isTimeTraveling) {
            var path = this.currentPath;
            var params = this.get('currentState.routerJsState')['params'][path];
            redux.dispatch({
                type: '@@router/LOCATION_CHANGE',
                path: path,
                params: params
            });
        }
    }.on('didTransition')
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', { path: '/' });
  this.route('hats', { path: '/hats' });
});

var isTimeTraveling = false;
Router.reopen({
    sync: function() {
        //all hacking below here - only learning how this might work
        var path = this.currentPath;
        var redux = this.container.lookup('service:redux');
        redux.subscribe(() => {
            var routerState = redux.getState().router;
            var path = routerState.location;
            var current = this.currentPath;
            if(path !== current) {
                isTimeTraveling = true;
                this.transitionTo(path);
                Ember.run.next(function() {
                    isTimeTraveling = false;
                });
            }
        }.bind(this));
        if(!isTimeTraveling) {
            redux.dispatch({
                type: '@@router/LOCATION_CHANGE',
                location: path
            });
        }
    }.on('didTransition')
});

export default Router;

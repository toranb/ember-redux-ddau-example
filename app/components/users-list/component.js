import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';
import ajax from 'example/utilities/ajax';

var stateToComputed = (state) => {
  return {
    users: state.users.all
  };
};

var dispatchToActions = (dispatch) => {
  return {
    remove: (id) => ajax(`/api/users/${id}`, 'DELETE').then(() => dispatch({type: 'REMOVE_USER', id: id})),
    update: (name) => dispatch({type: 'UPDATE_USERNAME', name: name})
  };
};

var UserListComponent = Ember.Component.extend({
  layout: hbs`
    {{yield users (action "update")}}
  `
});

export default connect(stateToComputed, dispatchToActions)(UserListComponent);

import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var UserTableComponent = Ember.Component.extend({
  layout: hbs`
    {{#each users as |user|}}
      <div>{{user.name}}</div>
      <button onclick={{action remove user.id}}>remove</button>
    {{/each}}
  `
});

export default UserTableComponent;

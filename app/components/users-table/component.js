import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var UserTableComponent = Ember.Component.extend({
  layout: hbs`
    {{#each users as |user|}}
      <div>{{user.name}}</div>
      <input id="name" class="form-control detail-name" placeholder="name" value={{user.name}} oninput={{action update value="target.value"}} />
    {{/each}}
  `
});

export default UserTableComponent;

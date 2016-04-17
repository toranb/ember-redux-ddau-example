import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

var UserDefinedComponent = Ember.Component.extend({
  layout: hbs`
    {{#each users as |user|}}
      {{#if custom}}
        {{component custom user=user}}
      {{else}}
        <h1>{{user.name}}</h1>
      {{/if}}
    {{/each}}
  `
});

export default UserDefinedComponent;

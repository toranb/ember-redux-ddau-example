import hbs from 'htmlbars-inline-precompile';
import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('user-defined', 'integration: user defined test', {
    integration: true,
    setup() {
        this.set('users', [{id: 3, name: 'foo'}]);
    }
});

test('should render only h1 when no custom component name passed in', function(assert) {
    this.render(hbs`{{user-defined users=users}}`);
    var header = this.$('h1');
    assert.equal(header.length, 1);
    var dynamicHeader = this.$('h2');
    assert.equal(dynamicHeader.length, 0);
});

test('should render custom component with specified markup', function(assert) {
    this.registry.register('template:components/foo-bar', hbs`<h2>{{user.name}}</h2>`);
    this.set('custom', 'foo-bar');
    this.render(hbs`{{user-defined users=users custom=custom}}`);
    var header = this.$('h1');
    assert.equal(header.length, 0);
    var dynamicHeader = this.$('h2');
    assert.equal(dynamicHeader.length, 1);
});

test('htmlbars will blow up when component is not available', function(assert) {
    this.registry.register('template:components/foo-bar', hbs`<h2>{{user.name}}</h2>`);
    assert.expect(1);
    this.set('custom', 'wat-hat');
    try {
        this.render(hbs`{{user-defined users=users custom=custom}}`);
    } catch(e) {
        assert.ok(e.message.indexOf('Could not find component') > -1);
    }
});

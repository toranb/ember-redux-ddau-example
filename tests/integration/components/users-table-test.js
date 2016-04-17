import hbs from 'htmlbars-inline-precompile';
import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('users-table', 'integration: users table test', {
    integration: true
});

test('should fire action when button is clicked', function(assert) {
    assert.expect(1);
    this.set('remove', (id) => {
        assert.equal(id, 3);
    });
    this.set('users', [{id: 3, name: 'foo'}]);
    this.render(hbs`{{users-table users=users remove=(action remove)}}`);
    var $button = this.$('button');
    $button.trigger('click');
});

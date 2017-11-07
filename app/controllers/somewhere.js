import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['somewhereParam'],
  somewhereParam: null,

  somewhereString: computed('somewhereParam', function() {
    return String(this.get('somewhereParam'));
  })
});

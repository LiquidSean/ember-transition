import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),


  actions: {
    act() {
      this.get('router').transitionTo({
        queryParams: {
          nestedParam: 'a'
        }
      })
    }
  }
});

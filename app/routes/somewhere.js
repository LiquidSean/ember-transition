import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    somewhereParam: {
      refreshModel: true
    }
  },

  calls: 0,

  model() {
    this.incrementProperty('calls');
    return this.get('calls');
  }
});

import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['nestedParam'],

  actions: {
    trigger(param) {
      this.transitionToRoute({
        queryParams: {
          nestedParam: param
        }
      })
    }
  }
});

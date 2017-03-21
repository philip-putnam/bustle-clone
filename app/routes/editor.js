import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('content');
  },
  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('content', params);
      newStory.save();
      this.transitionTo('index');
    },
    deleteStory(content) {
      content.destroyRecord();
      this.transitionTo('editor');
    }
  }
});

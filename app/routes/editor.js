import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('content', params);
      newStory.save();
      this.transitionTo('index');
    }
  }
});

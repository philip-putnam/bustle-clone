import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStory(params) {
      console.log(params);
      var newStory = this.store.createRecord('content', params);
      console.log(newStory);
      newStory.save();
      this.transitionTo('index');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    saveStory() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        picture: this.get('picture'),
        title: this.get('title'),
      };
      this.sendAction('saveStory', params);
    },
    showNewStoryForm() {
      this.set('addNewStory', true);
    }
  }
});

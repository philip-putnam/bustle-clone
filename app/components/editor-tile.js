import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStory() {
      console.log(this.get('inside'));
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        picture: this.get('picture'),
        title: this.get('title'),
      };
      this.sendAction('saveStory', params);
    }
  }
});

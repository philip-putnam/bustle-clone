import Ember from 'ember';

export default Ember.Component.extend({
  isStoryShowing: false,
  editStory: false,
  actions: {
    storyShow(){
      this.set('isStoryShowing', true);
    },
    deleteStory(content) {
      if (confirm("For Sure?")){
        this.sendAction('deleteStory', content);
      }
    },
    showEditor() {
      this.set('editStory', true);
    },
    updateStory(content) {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        picture: this.get('picture'),
        title: this.get('title'),
      };
      this.sendAction('updateStory', content, params);
    }
  }
});

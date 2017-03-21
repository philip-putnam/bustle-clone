import Ember from 'ember';

export default Ember.Component.extend({
  isStoryShowing: false,
  actions: {
    storyShow: function() {
        this.set('isStoryShowing', true);
      },
    storyHide: function() {
        this.set('isStoryShowing', false);
      }
    }
});

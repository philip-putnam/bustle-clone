import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  picture: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr()
});

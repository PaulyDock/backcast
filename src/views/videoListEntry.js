var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.snippet));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

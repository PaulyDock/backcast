var VideoListView = Backbone.View.extend({
  
  // el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(child) {
      console.log('child: ', child);
      new VideoListEntryView({el: '.video-list div', collection: child});
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

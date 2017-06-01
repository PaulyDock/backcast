var VideoListView = Backbone.View.extend({
  
  // el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var videoList = this.collection.map(function(child) {
      console.log('child: ', child);
      return new VideoListEntryView({model: child}).render().el;
    });
    $('.video-list').append(videoList);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

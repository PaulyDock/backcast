var VideoListView = Backbone.View.extend({
    
  initialize: function() {
    this.render();
    console.log('this.collection: ', this.collection);
  },
  
  renderVideo: function(model) {
    var videoListEntryView = new VideoListEntryView({model: model});
    $('.video-list').append(videoListEntryView.el);
  },

  render: function() {
    this.$el.html(this.template());
    _(this.collection).each(this.renderVideo);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

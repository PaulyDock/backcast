var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    
  },

  render: function() {
    this.$el.html(this.template());
    var videoListView = new VideoListView({el: '.list', collection: this.videos});
    console.log(videoListView);
    new VideoPlayerView({model: window.exampleVideoData[0]});
    return this;
  },

  template: templateURL('src/templates/app.html')

});

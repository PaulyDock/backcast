var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    // this.set({renderedVideo: 0});
    console.log(this);
    console.log(this.get('renderedVideo'));
    
  },

  renderedVideo: function(videoID) {
    return window.exampleVideoData[videoID];
  },
  
  videoID: 0,

  render: function() {
    // console.log('renderedVideo', this.renderedVideo);
    // this.videoID = 0;
    this.$el.html(this.template());
    new VideoListView({el: '.list', collection: window.exampleVideoData});
    var videoPlayerView = new VideoPlayerView({model: this.renderedVideo(this.videoID)});
    return this;
  },

  template: templateURL('src/templates/app.html')

});

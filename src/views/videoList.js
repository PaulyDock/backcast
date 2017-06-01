var VideoListView = Backbone.View.extend({
  
  // el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var videoList = this.collection.map(function(child) {
      return new VideoListEntryView({model: child}).el;
    });
    _.each(videoList, function(video, i) {
      video.setAttribute('videoID', i);
      $('.video-list').append(video);

      $('[videoID=' + i + ']').on('click', function(event) {
        console.log(Backbone.View.videoID);
        console.log(video.getAttribute('videoid'));
      });
      
    });
    // $('.video-list').append(videoList);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

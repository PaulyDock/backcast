var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.video = new Video(this.model);
  },
  
  events: {
    'click .video-list-entry-title': 'clicked'
  },
  
  clicked: function(e) {
    e.preventDefault();
    var videoID = this.video.get('id');
    console.log(videoID);
  },

  render: function() {
    this.$el.html(this.template(this.model.snippet));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

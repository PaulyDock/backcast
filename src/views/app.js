var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    var exampleData = new Videos(window.exampleVideoData);
     console.log('exampleData');
    new VideoListView({el: '.list', collection: window.exampleVideoData});
    return this;
  },

  template: templateURL('src/templates/app.html')

});

var AppView = Backbone.View.extend({
  el: '#app',
  collection: this.videos,

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: '.list',
      collection: this.videos
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      el: '.player',
    }).render();

    new SearchView({
      el: '.search',
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});

var AppView = Backbone.View.extend({
  el: '#app',
  searchView: undefined,

  initialize: function() {
    this.collection = new Videos(window.exampleVideoData);
    this.collection.on('change:results', function () {
      alert('Jbiebs in the house');
      this.collection = new Videos(this.collection.results);
    }, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: '.list',
      collection: this.collection
    }).render();

    new VideoPlayerView({
      model: this.collection.at(0),
      el: '.player',
      collection: this.collection
    }).render();

    searchView = new SearchView({
      el: '.search',
      collection: this.collection
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});

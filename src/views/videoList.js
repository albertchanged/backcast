var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().children().detach();
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.children().append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

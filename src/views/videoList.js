var VideoListView = Backbone.View.extend({
  
  initialize: function() {

  },
  
  render: function() {
    this.$el.children().detach();
    // console.log(this.$el.children());
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    console.log(this.collection);
    // console.log(this.$el.children());
    return this;
  },

  renderVideo: function(video) {
    console.log(video);
    var videoListEntryView = new VideoListEntryView({model: video});
    // console.log(videoListEntryView);
    this.$el.children().append(videoListEntryView.render());
    // console.log(this.$('.video-list'));
    // console.log(this);
  },

  template: templateURL('src/templates/videoList.html')

});

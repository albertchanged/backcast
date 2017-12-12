var VideoPlayerView = Backbone.View.extend({

  template: _.template('<div class="video-player">\
  <div class="embed-responsive embed-responsive-16by9">\
    <iframe class="embed-responsive-item" src=<%- videoUrl %> allowFullScreen></iframe>\
  </div>\
  <div class="video-player-details">\
    <h3><%- title %></h3>\
    <div><%- detail %></div>\
  </div>\
</div>'),
  render: function() {
    if (this.model) { 
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>'); 
    }
    return this;
  },

  // template: templateURL('src/templates/videoPlayer.html')

});

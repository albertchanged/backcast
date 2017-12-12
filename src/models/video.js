var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('detail', video.snippet.description);
    this.set('imageDefault', video.snippet.thumbnails.default.url);
    // this.set('imageLarge', video.snippet.thumbnails.high.url);
    this.set('videoUrl', 'https://www.youtube.com/embed/' + this.id);
  },
  
  select: function() {
    this.trigger('select', this);
  }

});

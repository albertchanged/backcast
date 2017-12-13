var Videos = Backbone.Collection.extend({

  model: Video,
  // this.videos: new Video(window.exampleVideoData);
  initialize: function() {
    
  },

  findVideo: function (id) {
    return this.get(id);
  },

  removeVideo: function(id) {
    console.log('Removed video has ', this);
    return this.remove(this.where({id: id}), {silent: true});
  },

  unshiftVideo: function(video) {
    console.log('UnshiftVideo has ', this);
    return this.unshift(video);
  },

  // setVideo: function()
});
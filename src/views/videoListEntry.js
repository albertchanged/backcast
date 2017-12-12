var VideoListEntryView = Backbone.View.extend({
  
  template: _.template ('<div class="video-list-entry media">\
  <div class="media-left">\
    <img class="media-object" src=<%- imageDefault %> />\
  </div>\
  <div class="media-body">\
    <div class="video-list-entry-title"><%- title %></div>\
    <div class="video-list-entry-detail"><%- detail %></div>\
  </div>\
  </div>'),

  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  handleClick: function() {
    alert(this.model.attributes.title);
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

});

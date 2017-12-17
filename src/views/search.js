var SearchView = Backbone.View.extend({
  
  query: undefined,
   
  initialize: function() {
    // this.on('change', this.render, this);
  },

  events: {
    'click button': 'handleClick'
  },

  handleClick: function() {
    query = $('.form-control').val();
    this.collection.search(this.query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

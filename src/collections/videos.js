var Videos = Backbone.Collection.extend({

  model: Video,
  results: undefined,

  initialize: function() {
  },

  search: function(query) {
    Backbone.ajax({
       // cache: false,
      data: {
        key: 'AIzaSyDUK8Yh_bcV2H8Ha6ri061IkKzg02M0GFw',
        q: query,
        part: 'snippet',
        maxResults: 5,
        embeddable: true
      },
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(data) {
        results = data.items;
        console.log(results);
      }
    });
  },
});
//Reveal only the article section
(function(module) {
  var articleController = {};

  articleController.index = function() {
    $('#about').hide();
    $('#resume').hide();
    $('#education').hide();
    $('#reference').hide();
    $('#articles').show();
  };
  module.articleController = articleController;
})(window);

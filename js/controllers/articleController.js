//Reveal only the article section
(function(module) {
  var articleController = {};

  articleController.index = function() {
    $('#about').hide();
    $('#articles').show();
  };
  module.articleController = articleController;
})(window);

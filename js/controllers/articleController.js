//Reveal only the article section
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('main section').hide();
    $('#articles').show();
  };
  module.articleController = articleController;
})(window);

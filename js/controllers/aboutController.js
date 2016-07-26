//This page to reveal only the about section
(function(module) {
  var aboutController = {};
  aboutController.reveal = function() {
    $('main section').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);

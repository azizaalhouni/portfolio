//This page to reveal only the about section
(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);

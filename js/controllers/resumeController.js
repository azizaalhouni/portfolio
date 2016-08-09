(function(module){
  var resumeController = {};
  resumeController.index = function(){
    $('#about').hide();
    $('#articles').hide();
    $('#resume').fadeIn();
    $('#education').fadeIn();
    $('#reference').fadeIn();
  };
  module.resumeController = resumeController;
})(window);

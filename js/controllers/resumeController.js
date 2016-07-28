(function(module){
  var resumeController = {};
  resumeController.index = function(){
    $('#about').hide();
    $('#articles').hide();
    $('#resume').fadeIn();
  };
  module.resumeController = resumeController;
})(window);

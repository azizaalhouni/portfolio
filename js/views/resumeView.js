(function(module){
  var resumeView  = {};
  var source = $('#resume-template').html();
  var template = Handlebars.compile(source);
  resumeView.renderIndexPage = function() {
    console.log('cv');
    Resume.allExperience.forEach(function(a) {
      $('#resume').append(a.toHtml('#resume-template'));
    });
  };
  module.resumeView = resumeView;
})(window);
Resume.fetchAll(resumeView.renderIndexPage);

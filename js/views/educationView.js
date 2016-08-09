(function(module){
  educationView = {};
  var source = $('#education-template').html();
  var template  = Handlebars.compile(source);
  educationView.renderIndexPage = function() {
    console.log('renderIndex');
    Education.allEducation.forEach(function(element) {
      $('#education').append(element.toHtml('#education-template'));
    });
  };
  module.educationView = educationView;
})(window);
Education.fetchAll(educationView.renderIndexPage);

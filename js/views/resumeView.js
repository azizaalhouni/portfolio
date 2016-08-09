(function(module){
  var resumeView  = {};
  var source = $('#resume-template').html();
  var template = Handlebars.compile(source);
  // resumeView.hundleFilter = function() {
  //   $('#resume-template').on(change,)
  // };

  resumeView.renderIndexPage = function() {
    console.log('cv');
    Resume.allExperience.forEach(function(a) {
      $('#resume').append(a.toHtml('#resume-template'));
    });
  };
  resumeView.hideStuff = function() {
    $('#resume').hide();
  };

  $('.tab-content').on('click',function(event){
    event.preventDefault();
    // var $show = $(this);
    // $show.fadeIn();
    $('.tab-content').children().hide();
    $(this).children().fadeIn();
  });
  module.resumeView = resumeView;
})(window);
Resume.fetchAll(resumeView.renderIndexPage);

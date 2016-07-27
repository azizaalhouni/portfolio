(function(module) {
  var repoView = {};
  //compile our new template
  //save the result of invoking handlebars in this 'repoCompiler' variable
  //that we will pass to the append method below
  var repoCompiler = Handlebars.compile($('#repo-template').text());
  repoView.renderRepos = function() {
    $('#about ul').empty().append(reposObj.withTheAttribute('name').map(repoCompiler));
  };
//call the function that loads or requests our repo data.
//pass in some view function as a higher order callback
//so our repos will render after the data is loaded
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);

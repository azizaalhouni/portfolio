(function(module){

  var reposObj = {};
  reposObj.allRepos = [];
  reposObj.requestRepos = function(next) {
    //fetch the repo
    $.ajax({
      url: 'https://api.github.com/users/azizaalhouni/repos',
      type: 'GET',
      headers: {
        'Authorization':'token '+ token,
      },
      success: function(data, message, xhr) {
        data.forEach(function(current) {
          reposObj.allRepos.push(current);
        });
        next();
      }
    });
  };
  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };
  module.reposObj = reposObj;

})(window);

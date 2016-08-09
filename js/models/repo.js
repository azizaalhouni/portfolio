(function(module){

  var reposObj = {};
  reposObj.allRepos = [];
  reposObj.requestRepos = function(next) {
    // //fetch the repo
    // $.ajax({
    //   url: 'https://api.github.com/users/azizaalhouni/repos',
    //   type: 'GET',
    //   headers: {
    //     'Authorization':'token '+ token,
    //   },
    //   success: function(data, message, xhr) {
    //     data.forEach(function(current) {
    //       reposObj.allRepos.push(current);
    //     });
    //     next();
    //   }
    // });
    //Jquery call
    $.get('/github/users/azizaalhouni/repos' )
    // + '?per_page=10&sort=updated'
    .done(function(data) {
      reposObj.allRepos = data;
    }).done(next);
  };
  // reposObj.withTheAttribute = function(myAttr) {
  //   return reposObj.allRepos.filter(function(aRepo) {
  //     return aRepo[myAttr];
  //   });
  // };
  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      if(!aRepo.fork) {
        return aRepo[myAttr];
      }
    });
  };
  module.reposObj = reposObj;

})(window);

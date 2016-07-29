(function(module){
  //constructor function
  function Resume(opts)
  {
    for(keys in opts) {
      this[keys] = opts[keys];
    }
  };
  Resume.allExperience = [];
  Resume.prototype.toHtml = function(targetId) {
    var source = $(targetId).html();
    var template = Handlebars.compile(source);
    return template(this);
  };
  //localStorage
  Resume.loadAll = function(dataPassIn) {
    Resume.allExperience = dataPassIn.map(function(ele) {
      return new Resume(ele);
    });
  };
  //Now we call what we pass
  Resume.fetchAll = function(nextFunction) {
    var storeData = localStorage.cv;
    //var storeData;
    if(storeData){
      $.ajax({
        type: 'HEAD',
        url: '/data/cv.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if(!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Resume.getAll(nextFunction);
          } else {
            Resume.loadAll(JSON.parse(localStorage.cv));
            nextFunction();
          }
        }
      });

    } else {
      Resume.getAll(nextFunction);
    }
  };
//call the function if you want to refresh the data from the sourch
  Resume.getAll = function(nextFunction){
    // console.log('gets here');
    $.getJSON('/data/cv.json', function(responseData, msg, xhr){
      console.log(msg);
      Resume.loadAll(responseData);
      localStorage.cv = JSON.stringify(responseData);
      console.log('this works');
      nextFunction();
    });
  };
  module.Resume = Resume;
})(window);

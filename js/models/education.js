(function(module){
  function Education(opts) {
    for(var keys in opts) {
      this[keys] = opts[keys];
    }
  };
  Education.allEducation = [];
  Education.prototype.toHtml = function(targetId){
    var source = $(targetId).html();
    var template = Handlebars.compile(source);
    return template(this);
  };
  //load from the local storage
  Education.loadAll = function(dataPassIn) {
    Education.allEducation = dataPassIn.map(function(ele) {
      return new Education(ele);
    });
  };
  //now we call what we pass
  Education.fetchAll = function(nextFunction){
    console.log('fetchAll');
    var storeData = localStorage.education;
    if(storeData) {
      $.ajax({
        type: 'HEAD',
        url: '/data/education.json',
        success: function(data, message, xhr) {
          Education.getAll(nextFunction);
        }
      });
    }else {
      Education.getAll(nextFunction);
    }
  };

  Education.getAll = function(nextFunction) {
    $.getJSON('/data/education.json', function(responseData){
      Education.loadAll(responseData);
      localStorage.education = JSON.stringify(responseData);
      nextFunction();
    });
  };
  module.Education = Education;
})(window);

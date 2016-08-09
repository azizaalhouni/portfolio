(function(module){
  function Reference(opts) {
    for(keys in opts) {
      this[keys] = opts[keys];
    }
  };
  Reference.allreference = [];
  Reference.prototype.toHtml = function(targetId) {
    var source = $(targetId).html();
    var template = Handlebars.compile(source);
    return template(this);
  };
//load from the localStorage
  Reference.loadAll = function(dataPassIn) {
    Reference.allreference = dataPassIn.map(function(ele){
      return new Reference(ele);
    });
  };
  //Now we call what we pass
  Reference.fetchAll = function(nextFunction) {
    var storeData = localStorage.reference;
    if(storeData) {
      $.ajax({
        type: 'HEAD',
        url:'/data/reference.js',
        success:function(data,message, xhr) {
          Reference.getAll(nextFunction);
        }
      });
    } else {
      Reference.getAll(nextFunction);
    }
  };
  Reference.getAll = function(nextFunction) {
    $.getJSON('/data/reference.json',function(responseData){
      Reference.loadAll(responseData);
      localStorage.reference = JSON.stringify(responseData);
      nextFunction();
    });
  };
  module.Reference = Reference;
})(window);

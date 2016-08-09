(function(module){
  var referenceView = {};
  var source=$('#reference-template').html();
  var template = Handlebars.compile(source);
  referenceView.renderIndexPage = function() {
    Reference.allreference.forEach(function(a){
      $('#reference').append(a.toHtml('#reference-template'));
    });
  };
  module.referenceView = referenceView;
})(window);
Reference.fetchAll(referenceView.renderIndexPage);

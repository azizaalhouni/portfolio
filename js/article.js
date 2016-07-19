// var articles = [];
//constructor function
function Article(opts){
  for(keys in opts) {
    this[keys] = opts[keys];
  }
}
Article.all = [];
Article.prototype.toHtml = function(){
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

//localStorage
Article.loadAll = function(dataWePassIn) {
  dataWePassIn.sort(function(a,b){
    return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
  }).forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
};
//localStorage
Article.fetchAll = function() {
  var storeData = localStorage.hackerIpsum;
  if(storeData) {
    var retrieveData = JSON.parse(storeData);
    articleView.renderIndexPage();
  } else {
    $.getJSON('../data/hackerIpsum.json',function(data){
      localStorage.hackerIpsum = JSON.stringify(data);
      console.log('fetchAll');
      Article.loadAll(data);
      articleView.renderIndexPage();
    }) .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
    });
  }
};

var articles = [];
//constructor function
function Article(opts){
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
};

Article.prototype.toHtml = function(){
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

myLocalData.sort(function(curElem, nextElem){
  return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
});
myLocalData.forEach(function(element){
  articles.push(new Article(element));
});
articles.forEach(function(curElem){
  $('#articles').append(curElem.toHtml());
});

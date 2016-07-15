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
  // var $newArticle = $('article.template').clone();
  // $newArticle.find('h1').text(this.title);
  // // console.log(this.title);
  // $newArticle.attr('data-category',this.category);
  // $newArticle.find('address a').text(this.author);
  // $newArticle.attr('data-author',this.author);
  // // console.log(this.author);
  // $newArticle.find('address a').attr('href',this.author);
  // $newArticle.find('time').text(this.publishedOn);
  //
  // $newArticle.find('section.article-body').html(this.body);
  // // console.log(this.body);
  // $newArticle.find('time[pubdate]').attr('title',this.publishedOn);
  // $newArticle.find('time').html(' about '+parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000)+ ' days ago');
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  // $('#article').append($newArticle);
  // $newArticle.removeClass('template');
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


(function(module){
//constructor function
  function Article(opts){
    for(keys in opts) {
      this[keys] = opts[keys];
    }
  }
  Article.allArticles = [];

  Article.prototype.toHtml = function(targetId){
    var source = $(targetId).html();
    var template = Handlebars.compile(source);
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    return template(this);
  };

  //localStorage
  Article.loadAll = function(dataWePassIn) {
    Article.allArticles = dataWePassIn.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
      //transformation of one collection into another
    }).map(function(ele) {
      return new Article(ele);
    });
  };
  //localStorage
  /*it now accepts a parameter that will execute once
  the loading of articles is done Now we can call whatever we pass in*/
  Article.fetchAll = function(nextFunction) {
    var storeData = localStorage.hackerIpsum;
    if(storeData) {
      //eTag
      $.ajax({
        type: 'HEAD',
        url: '/data/hackerIpsum.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if(!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Article.getAll(nextFunction);
          } else {
            Article.loadAll(JSON.parse(localStorage.hackerIpsum));
            nextFunction();
          }
        }
      });
    } else {
      Article.getAll(nextFunction);
    }
  };
  //call this function if you want to refresh data from the source
  Article.getAll = function(nextFunction){
    $.getJSON('/data/hackeripsum.json', function(responseData){
      Article.loadAll(responseData);
      localStorage.hackerIpsum = JSON.stringify(responseData);
      nextFunction();
    });
  };
  //chain together a map and a reduce call to get a rough count of all
  //words in all articles
  Article.numWordsAll = function() {
    return Article.allArticles.map(function(article) {
      //Grab the word count from each article body
      return article.body.match(/\w+/g).length;
    }).reduce(function(a,b) {
      return a+b;
    });
  };
  //Chain together a 'map' and a 'reduce' call to produce an array of
  //of unique author names
  Article.allAuthors = function() {
    return Article.allArticles.map(function(article){
      return article.author;
    }).reduce(function(authorArray, currentAuthor, index) {
      if(authorArray.indexOf(currentAuthor) === -1 ) {
        authorArray.push(currentAuthor);
      }
      return authorArray;
    }, []);
  };
  Article.numWordsByAuthor = function() {
    return Article.allAuthors().map(function(author) {
      return {
        name : author,
        numWords: Article.allArticles.filter(function(article) {
          return (article.author === author);
        }).map(function(article) {
          return article.body.match(/\w+/g).length;
        }).reduce(function(a,b) {
          return a+b;
        })
      };
    });
  };
  
  module.Article = Article;
})(window);

Day4
**change in article.js **
we change the template to handlebarsjs to make it more cleaner

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
// $('#article').append($newArticle);
// $newArticle.removeClass('template');

We change the pervious code with next code
var source = $('#article-template').html();
var template = Handlebars.compile(source);

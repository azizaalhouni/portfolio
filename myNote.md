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

***pupleate
//function to upload the infor on the selector
// articleView.populateFilters = function() {
//   $('article').each(function() {
//     // populate the author filter
//     var authorData = $(this).data('author');
//     var authorFilterSource = $('#author-template').html();
//     var authorFilterTemplate = Handlebars.compile(authorFilterSource);
//     var authorOptionHtml = authorFilterTemplate({author:authorData});
//     $('#author-filter').append(authorOptionHtml);
//
//     // populate the category filter
//     var categoryData = $(this).data('category');
//     var categoryFilterSource = $('#category-template').html();
//     var categoryFilterTemplate = Handlebars.compile(categoryFilterSource);
//     var categoryOptionHtml = categoryFilterTemplate({category:categoryData});
//     if ($('#category-filter option[value="' + categoryData + '"]').length === 0) {
//       $('#category-filter').append(categoryOptionHtml);
//     }
//   });
// };
// articleView.populatedFilters = function() {
//   $('article').not('.template').each(function(){
//     var authorName, category, optionTag;
//     //author Name
//     authorName = $(this).find('address a').text();
//     optionTag = '<option value = "' + authorName + '">'+authorName+'</option>';
//     console.log(authorName);
//     if($('#author-filter option[value ="'+ authorName +'"]').length === 0) {
//       $('#author-filter').append(optionTag);
//     }
//     //category
//     category = $(this).attr('data-category');
//     optionTag = '<option value = "' + category + '">'+category+'</option>';
//     if($('#category-filter option[value ="'+ category +'"]').length === 0) {
//       $('#category-filter').append(optionTag);
//     }
//   });
// };
 in the end of article view
 //local Storage
 Article.fetchAll();
**using JSON
// myLocalData.sort(function(curElem, nextElem){
//   return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
// });
// myLocalData.forEach(function(element){
//   articles.push(new Article(element));
// });
// articles.forEach(function(curElem){
//   $('#articles').append(curElem.toHtml());
// });
function Article(opts){
  // this.title = opts.title;
  // this.category = opts.category;
  // this.author = opts.author;
  // this.authorUrl = opts.authorUrl;
  // this.publishedOn = opts.publishedOn;
  // this.body = opts.body;
  / articleView.populatedFilters = function() {
  //   $('article').not('.template').each(function(){
  //     var authorName, category, optionTag;
  //     //author Name
  //     authorName = $(this).find('address a').text();
  //     optionTag = '<option value = "' + authorName + '">'+authorName+'</option>';
  //     console.log(authorName);
  //     if($('#author-filter option[value ="'+ authorName +'"]').length === 0) {
  //       $('#author-filter').append(optionTag);
  //     }
  //     //category
  //     category = $(this).attr('data-category');
  //     optionTag = '<option value = "' + category + '">'+category+'</option>';
  //     if($('#category-filter option[value ="'+ category +'"]').length === 0) {
  //       $('#category-filter').append(optionTag);
  //     }
  //   });
  // };

  //
  //     var retrieveData = JSON.parse(storeData);
  //     Article.loadAll(retrieveData);
  //     articleView.renderIndexPage();
  //   } else {
  //     $.getJSON('../data/hackerIpsum.json',function(data){
  //       localStorage.hackerIpsum = JSON.stringify(data);
  //       console.log('fetchAll');
  //       Article.loadAll(data);
  //       articleView.renderIndexPage();
  //     }) .fail(function( jqxhr, textStatus, error ) {
  //       var err = textStatus + ', ' + error;
  //       console.log('Request Failed: ' + err );
  //     });
  //   }
  // };

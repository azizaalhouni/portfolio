//configure a view object, to hold all our functions for dynamic and article-related event handler

var articleView = {};
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
articleView.populatedFilters = function() {
  $('article').not('.template').each(function(){
    var authorName, category, optionTag;
    //author Name
    authorName = $(this).find('address a').text();
    optionTag = '<option value = "' + authorName + '">'+authorName+'</option>';
    console.log(authorName);
    if($('#author-filter option[value ="'+ authorName +'"]').length === 0) {
      $('#author-filter').append(optionTag);
    }
    //category
    category = $(this).attr('data-category');
    optionTag = '<option value = "' + category + '">'+category+'</option>';
    if($('#category-filter option[value ="'+ category +'"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};
//function to Filter Author Name
articleView.handleAuthorFilter = function(){
  $('#author-filter').on('change',function(){
    if($(this).val()) {
      $('article').hide();
      $('article[data-author="'+$(this).val()+'"]').fadeIn();
      console.log($(this).val());
    } else {
      $('article').fadeIn();
      $('article-template').hide();
    }
    $('#category-filter').val('');
  });
};
//function to Filter category-filter
articleView.handleCategoryFilter = function () {
  $('#category-filter').on('change', function(){
    if($(this).val()) {
      $('article').hide();
      $('article[data-category="'+$(this).val()+'"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article-template').hide();
    }
    $('#author-filter').val('');
  });
};
//To make Tab works
articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab',function(){
    var $id = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $id).fadeIn();
  });
  $('.main-nav .tab:first').click();
};
//To show a little bit from the article
articleView.setTeasers = function(){
  var $readOn = $('.article-body *:nth-of-type(n+2)');
  $readOn.hide();
  $(document).on('click','.read-on',function(event){
    event.preventDefault();
    var $show = $(this).prev().children();
    $show.fadeIn();
    $(this).text('show less');
    $(this).removeClass('read-on').addClass('show-less');
  });
  $(document).on('click','.show-less',function(event){
    event.preventDefault();
    $readOn.hide();
    $(this).text('Read More');
    $(this).removeClass('show-less').addClass('read-on');
  });
};
// articleView.render();
// articleView.populateFilters();
articleView.populatedFilters();
articleView.handleCategoryFilter();
articleView.handleAuthorFilter();
articleView.handleMainNav();
articleView.setTeasers();

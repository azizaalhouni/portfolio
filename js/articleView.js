//configure a view object, to hold all our functions for dynamic and article-related event handler

var articleView = {};
//function to upload the infor on the selector
articleView.populatedFilters = function() {
  $('article').not('.template').each(function(){
    //author Name
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value = "' + authorName + '">'+authorName +'</option>';
    $('#author-filter').append(optionTag);
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
    } else {
      $('article').fadeIn();
      $('.template').hide();
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
      $('.template').hide();
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
articleView.populatedFilters();
articleView.handleCategoryFilter();
articleView.handleAuthorFilter();
articleView.handleMainNav();

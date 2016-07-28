(function(module){
//configure a view object, to hold all our functions for dynamic and article-related event handler
  var articleView = {};

  //function to Filter Author Name
  articleView.handleAuthorFilter = function(){
    $('#author-filter').on('change',function(){
      if($(this).val()) {
        $('article').hide();
        $('article[data-author="' + $(this).val() + '"]').fadeIn();
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
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article-template').hide();
      }
      $('#author-filter').val('');
    });
  };
  //To make Tab works
  // articleView.handleMainNav = function() {
  //   $('.main-nav').on('click', '.tab',function(){
  //     var $id = $(this).data('content');
  //     $('.tab-content').hide();
  //     $('#' + $id).fadeIn();
  //   });
  //   $('.main-nav .tab:first').click();
  // };
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
      var $article = $(this).parent();
      $article.find('p:nth-of-type(n+2)').hide();
      $(this).text('Read More');
      $(this).removeClass('show-less').addClass('read-on');
    });
  };
    //Local Storage
  articleView.renderIndexPage = function(){
    Article.allArticles.forEach(function(a){
      $('#articles').append(a.toHtml('#article-template'));
      if($('#category-filter option:contains("' + a.category + '")').length === 0) {
        console.log('works');
        $('#category-filter').append(a.toHtml('#category-filter-template'));
      };
      if($('#author-filter option:contains("' + a.author + '")').length === 0) {
        $('#author-filter').append(a.toHtml('#author-filter-template'));
      };
    });
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    // articleView.handleMaisnNav();
    articleView.setTeasers();
  };
  module.articleView = articleView;
})(window);

Article.fetchAll(articleView.renderIndexPage);

define(['jquery'], function($) {
  var categoriesPageGenerator = function*(initialCategory) {
    var currentCategory = initialCategory;
    var page = 1;

    while(true) {
      $.get(currentCategory + '?sortBy=4&pageNum=' + page, function(data) {
        $(data).find('.product').appendTo($('#products'));
      });

      var nextCategory = yield page++;
      if(currentCategory != nextCategory) {
        page = 1;
        currentCategory = nextCategory;
        $('#products').empty();
      }
    }
  };

  var categoryPages = categoriesPageGenerator('http://www.elo7.com.br/categoria/acessorios');
  categoryPages.next();
  $('.category').on('click', function(e) {
    categoryPages.next(this.href);
    e.preventDefault();
  });
});

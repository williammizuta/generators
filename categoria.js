define(['jquery'], function($) {
  var categoriesPageGenerator = function*() {
    var page = 1;
    while(true) {
      $.get('http://www.elo7.com.br/categoria/acessorios?sortBy=4&pageNum=' + page, function(data) {
        $(data).find('.product').appendTo($('#products'));
      });
      yield page++;
    }
  };

  var categoryPages = categoriesPageGenerator();
  categoryPages.next();
  $('.category').on('click', function(e) {
    categoryPages.next();
    e.preventDefault();
  });
});

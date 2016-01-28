define(['jquery'], function($) {
  var getPage = function(page) {
    $.get('http://www.elo7.com.br/categoria/acessorios?sortBy=4&pageNum=' + page, function(data) {
      $(data).find('.product').appendTo($('#products'));
    });
  };

  var page = 1;
  getPage(page++);

  $('.category').on('click', function(e) {
    getPage(page++);
    e.preventDefault();
  });
});

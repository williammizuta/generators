define(['jquery'], function($) {
  $.get('http://www.elo7.com.br/categoria/acessorios?sortBy=4&pageNum=1', function(data) {
    $(data).find('.product').appendTo($('#products'));
  });

  var page = 2;
  $('.category').on('click', function(e) {
    $.get('http://www.elo7.com.br/categoria/acessorios?sortBy=4&pageNum=' + page, function(data) {
      $(data).find('.product').appendTo($('#products'));
    });
    page++;

    e.preventDefault();
  });
});

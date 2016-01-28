define(['jquery'], function($) {
  $.get('http://www.elo7.com.br/categoria/acessorios?sortBy=4&pageNum=1', function(data) {
    $(data).find('.product').appendTo($('#products'));
  });
});

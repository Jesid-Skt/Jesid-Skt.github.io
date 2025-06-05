$(function() {
  var i = 1;
  var stop = 4;
  setInterval(function() {
    if (i > stop) {
      i = 1;  // reinicia la cuenta para que el efecto sea cíclico
    }
    // Solo hace bounce si el menú está visible o en desktop (pantalla > 768px)
    if ($('#navbarMenu').hasClass('active') || $(window).width() > 768) {
      $('#len' + i).toggleClass('bounce');
      i++;
    }
  }, 500);
});

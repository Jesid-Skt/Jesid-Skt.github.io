

'use strict';
$(document).ready(function() {

    const allPanels = $('.subcategorias').hide();

$('.categoria-enlace').click(function () {
  const parentItem = $(this).closest('.categoria-item');
  const targetPanel = parentItem.find('.subcategorias');

  if (!parentItem.hasClass('activa')) {
    $('.categoria-item').removeClass('activa');
    allPanels.slideUp();

    parentItem.addClass('activa');
    targetPanel.slideDown();
  } else {
    parentItem.removeClass('activa');
    targetPanel.slideUp();
  }

  return false;
});
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

$(document).ready(function() {
  for (var x = 0; x < 16 * 16; x++) {
    $('<div class="unit">').appendTo('#container');
  }

  $(".unit").mouseenter(function() {
    $(this).addClass('black');
  });
});

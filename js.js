function handler () {
  var scrollTop = $window.scrollTop() + threshold;
  $lines.each(function () {
    if ($(this).offset().top < scrollTop) $(this).addClass('visible');
    else $(this).removeClass('visible');
  });
}

function reline () {
  $lines = $('.line');
  handler();
}

function thresholder () {
  threshold = $window.height() * 5 / 6;
}

var $window = $(window);
var $p = $('p');
var $lines, threshold;

$p.on('afterlining', reline);
$window.scroll(handler);
$window.resize(thresholder);

thresholder();

var $body = $('.banner');
var $star;

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    'top': Math.random() * (document.documentElement.clientHeight + 100),
    'left': Math.random() * (document.documentElement.clientHeight + 100),
    'opacity': Math.random(),
    'transform': Math.random()
  });
  $body.append($star);
}

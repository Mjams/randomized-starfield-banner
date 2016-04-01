var $body = $('body');
var $star = $('<div>');

for(i=0; i<75; i++) {
  $star.addClass('star');
  $star.css({
    'top': Math.random() * (document.documentElement.clientHeight + 100),
    'left': Math.random() * (document.documentElement.clientHeight + 100),
    'opacity': Math.random()
  });
  $body.append($star);
}

var $item = $('.carousel-item');
$item.addClass('banner');

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
   
  });
  $(this).remove();
});


$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

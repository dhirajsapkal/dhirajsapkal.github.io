// $(document).ready(function() {
//   $(window).on("resize", function(){
//    setBackgroundHeight();
//   });

//   function setBackgroundHeight() {
//    $("home_banner").height($(window).height());
//   };
//   setBackgroundHeight();
// });

// $(document).ready(function() {
//   function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.home_banner').css('min-height', windowHeight);
//   };
//   setHeight();

//   $(window).resize(function() {
//     setHeight();
//   });
// });



$(document).ready(function() {

  var windowH = $(window).height();
  var wrapperH = $('.home_banner').height();
  if(windowH > wrapperH) {
    $('.home_banner').css({'height':($(window).height())+60+'px'});
  }
  $(window).resize(function(){
    var windowH = $(window).height();
    var wrapperH = $('.home_banner').height();
    var differenceH = windowH - wrapperH;
    var newH = wrapperH + differenceH;
    var truecontentH = $('.home_banner_text').height();
    if(windowH > truecontentH) {
      $('.home_banner').css('height', (newH)+'px');
    }

  })


  /*
   * Replace all SVG images with inline SVG
   */
   jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });

  var wow = new WOW(    {
    offset: 200,
  });
  wow.init();

  smoothScroll.init({
    speed: 900, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
  });

});
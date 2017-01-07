(function($, undefined) {
  $(document).bind('deck.change', function(event, from, to) {
    // pause videos in 'from' slide
    $.deck('getSlide', from).find('video').each(function(index) {
      $(this).get(0).pause(); 
    });
    $.deck('getSlide', to).find('video').each(function(index) {
      $(this).get(0).loop = true;     // force video to loop
      $(this).get(0).currentTime = 0; // reset to beginning
      $(this).get(0).play();
    });
  });
})(jQuery);

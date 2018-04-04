$(document).ready(function(){

  // hide our element on page load
  $('#brewContainer').css('opacity', 0);

  $('#brewContainer').waypoint(function() {
      $('#brewContainer').addClass('fadeInUp');
  }, { offset: '60%' });

});

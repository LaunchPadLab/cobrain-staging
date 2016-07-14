//= require menu

/*-----------------------
Responsive
-----------------------*/
$(".nav-open").click(function() {
    $(".navigation-menu").addClass("active");
});

$(".nav-close").click(function() {
  $(".navigation-menu").removeClass("active");
});

/*-----------------------
Nav Background on Scroll
-----------------------*/
$(function(){
  var $topbarContainer = $('.navigation');
  $(document).load().scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
    $topbarContainer.addClass("active");
    } else {
      $topbarContainer.removeClass("active");
    }
  });
});

/*-----------------------
Slider
-----------------------*/
$(document).ready(function() {
  $('.gallery-slider').owlCarousel({
    items: 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    loop: true,
    center: true,
    lazyLoad : true,
    navigation: true
  });
});

/*-----------------------
Tabs
-----------------------*/
/*
$(document).ready(function(){

  // Variables
  var clickedTab = $(".tabs > .active");
  var tabWrapper = $(".tab__content");
  var activeTab = tabWrapper.find(".active");
  var activeTabHeight = activeTab.outerHeight();

  // Show tab on page load
  activeTab.show();

  // Set height of wrapper on page load
  tabWrapper.height(activeTabHeight);

  $(".tabs > li").on("click", function() {

    // Remove class from active tab
    $(".tabs > li").removeClass("active");

    // Add class active to clicked tab
    $(this).addClass("active");

    // Update clickedTab variable
    clickedTab = $(".tabs .active");

    // fade out active tab
    activeTab.fadeOut(250, function() {

      // Remove active class all tabs
      $(".tab__content > li").removeClass("active");

      // Get index of clicked tab
      var clickedTabIndex = clickedTab.index();

      // Add class active to corresponding tab
      $(".tab__content > li").eq(clickedTabIndex).addClass("active");

      // update new active tab
      activeTab = $(".tab__content > .active");

      // Update variable
      activeTabHeight = activeTab.outerHeight();

      // Animate height of wrapper to new tab height
      tabWrapper.stop().delay(0).animate({
        height: activeTabHeight
      }, 500, function() {

        // Fade in active tab
        activeTab.delay(50).fadeIn(250);

      });
    });
  });

});
*/
/*-----------------------
Toggle Menu
-----------------------*/

$('#menu-toggle').click(function () {
  $('.main-nav').toggleClass('toggled');
  $('.sticky-nav').toggleClass('toggled');
});


/*-----------------------
Accordion
-----------------------*/
$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
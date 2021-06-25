// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
  sectionsColor: ['#FFF8F3', '#FFF8F3', '#FFF8F3', '#FFF8F3', '#0B3F77', '#0B3F77'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['home', 'chisiamo', 'patologie', 'mappe', 'form', 'contatti'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(255, 255, 255, .9)');
    $nav.css('background', 'rgba(255, 255, 255, .9)');
//    if (index == 5) {
//        $('#fp-nav').hide();
//      }
  },

  onLeave: function(index, nextIndex, direction) {
//    if(index == 5) {
//      $('#fp-nav').show();
//    }
  },
});
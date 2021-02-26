$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
});

// $('bar').ready(function() {
//   window.onscroll = function () { window.scrollTo(0, 0); };
// });


$(document).ready(function(){
  var $window = $(window), previousScrollTop = 0, scrollLock = false;

$window.scroll(function(event) {     
    if(scrollLock) {
        $window.scrollTop(previousScrollTop); 
    }
    previousScrollTop = $window.scrollTop();
});
  var body = document.getElementsByTagName("header")[0],
      burger = document.querySelector('.toggle'),
      navbarMenu = document.querySelector('.navbar-menu');
  
  burger.onclick = function() {
      navbarMenu.classList.toggle('menu-opened');
      if(navbarMenu.getAttribute("class").indexOf("menu-opened") > -1){
        scrollLock = true;
           navbarMenu.classList.add("overflow_hidden");
           console.log("hi");
           console.log(scrollLock);
        // scroll to the top of the page
      }
      else 
        scrollLock = false;
        navbarMenu.classList.remove("overflow_hidden");
        console.log("bye");
  }
  scrollLock = false;
}());
/*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
  
    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  
  // Smooth scrolling for navigation links
  $('a.smoothScroll').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });

  // Add scroll event listener to make the navbar transparent when scrolling
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.custom-navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('navbar-transparent');
      } else {
          navbar.classList.remove('navbar-transparent');
      }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // ...existing code...
  });


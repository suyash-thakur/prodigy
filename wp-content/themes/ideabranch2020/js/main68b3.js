
//PRELOADER
$(window).on('load', function($){
  jQuery('body').imagesLoaded(function($) {
    jQuery("#preloader").delay(300).addClass('loaded');
  }); 
}); 

$(document).ready( function($) {

  $('.single-item').slick({
    dots: true,
    arrows : false,
  });

  // Call Function
  toggleClass();

  //fnAjaxLoadMorePortfolio();
  fnAjaxLoadMoreNews();
  fnAjaxFilterNews();

  parallaxAbout();
  parallaxServices();
  parallaxClient();
  
  //TYPED JS
  if ($('.element').length) {
    $('.element').each(function () {
        $(this).typed({
            strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
            loop: $(this).data('loop') ? $(this).data('loop') : false ,
            backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
            typeSpeed: 10,
        });
    });
}

//HERO SLIDER JS  
  var swiper = new Swiper('.swiper-container.classic', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true
    },
  });

  //Vertical Slide
  var swiperVertical = new Swiper('.swiper-container.upslide', {
    direction: 'vertical',
     autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
    effect: "fade",
    touchStartPreventDefault: false
  });
  //Carousel Slide
  var swiper = new Swiper('.swiper-container.carousel', {
    centeredSlides: true,
    slidesPerView: 'auto',
    speed:800,
    loop: true, 
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },   
  });

  //Client Slide
  new Swiper('.client__list .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerColumn: 3,
    speed:800,
    loop: true, 
    autoplay: true,
  });
  //Fade Slide
  var swiper = new Swiper('.swiper-container.fade-slide', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiperPort = new Swiper('.swiper-container.portfolio', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerColumn: 1,
        slidesPerView: 2,
        centeredSlides: true,
      }
    }
  });

  var swiperService = new Swiper('.swiper-container.slide-services', {
    slidesPerView: 4,
    slidesPerColumn: 3,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerColumn: 1,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
      },
      992: {
        slidesPerColumn: 1,
        slidesPerView: 2,
        spaceBetween: 80,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next.ser-btn',
      prevEl: '.swiper-button-prev.ser-btn',
    },
  });

//COUNTER JS  
if ($('.counter').length) {
  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      a = 1;
    }
  });
}

// OWL CAROUSEL JS
var owlcar = $('.owl-carousel');
if (owlcar.length) {
    owlcar.each(function () {
        var $owl = $(this);
        var itemsData = $owl.data('items');
        var autoplayData = $owl.data('autoplay');
        var autoPlayTimeoutData = $owl.data('autoplaytimeout');
        var dotsData = $owl.data('dots');
        var navData = $owl.data('nav');
        var marginData = $owl.data('margin');
        var stagePaddingData = $owl.data('stagepadding');
        var itemsDesktopData = $owl.data('items-desktop');
        var itemsTabletData = $owl.data('items-tablet');
        var itemsTabletSmallData = $owl.data('items-tablet-small');
        $owl.owlCarousel({
              items: itemsData
            , dots: dotsData
            , nav: navData
            , margin: marginData
            , loop: true
            , stagePadding: stagePaddingData
            , autoplay: autoplayData
            , autoplayTimeout: autoPlayTimeoutData
            , navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
            , responsive:{
                    0:{
                        items:itemsTabletSmallData,
                        stagePadding:0
                    },
                    600:{
                        items:itemsTabletData,
                        stagePadding:0
                    },
                    1000:{
                        items:itemsDesktopData
                    }
                }
        , });
    });
}

// ONE PAGE SCROLL JS

     if ($('.hero').length) {
      $(document).on("scroll", onScroll);
      $('nav ul li a, .slider-content .site-btn, .about .site-btn, .smoot-scroll').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('a').each(function () {
              $(this).removeClass('active');
          });
              
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          console.log(target);
          target = $(target);
          $('html, body').stop().animate({
              'scrollTop': target.offset().top
              
          }, 500, 'swing', function () {
              window.location.hash = target.selector;
              $(document).on("scroll", onScroll);
          });
      });
  }

  function onScroll(event){
    if ($('#hero').length) {     
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if(refElement.position() != undefined){
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("activelink");
                currLink.addClass("activelink");
            }
          }
      });
     }              
  }

  $('.nav-icon, nav ul li a').on("click", function(){
    $('header').toggleClass('open');
  });


  //NAVBAR SHOW - HIDE
  $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".hero").height() -86;			

    if (scroll > homeheight ) {												
      $("header").addClass('fixed');
      } else {
      $("header").removeClass('fixed');
      }
    }); 



// MAGNIFIC POPUP FOR PORTFOLIO PAGE
// function magnific()  {    
//   if ($('.lightbox-icon, .lightbox .image').length) {
//     $('.lightbox-icon, .lightbox .image').magnificPopup({
//           type:'image',
//           gallery:{enabled:true},
//           zoom:{enabled: true, duration: 300}
//       });
//     }

//    // LIGHTBOX VIDEO
//   $('.video-icon').magnificPopup({
//       disableOn: 700,
//       type: 'iframe',
//       mainClass: 'mfp-fade',
//       removalDelay: 160,
//       preloader: false,
//       fixedContentPos: false
//   });
// }

// magnific();
  

  // SCROLL ANIMATION
  new WOW({ offset: 200, mobile: false }).init();
  

  //CLIENT SLIDER JS
  $(".bxslider").bxSlider({
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 300,
    slideMargin: 30,
    ticker: true,
    tickerHover: true,
    speed: 30000
  });

  //PORTFOLIO JS
var $container = $('.masonry');
    $container.isotope({
      itemSelector: '.grid-item, .lightbox-gallery .msnry',
      gutter:0,
      transitionDuration: "0.5s",
      columnWidth: '.grid-item'
    });

    $container.imagesLoaded().progress( function() {
      $container.isotope('layout');
    });

    $('.portfolio_filter ul li a').on("click", function(){
      $(".portfolio_filter ul li a").removeClass("select-cat");
      $(this).addClass("select-cat");        
      var selector = $(this).attr('data-filter');
      $(".masonry").isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false,
    }
  });
      return false;
  });   
  
  $(".filter-icon").on("click", function() {
          $('.portfolio_filter').addClass('show');        
  });

  $(".portfolio_filter").on("click", function (event) {
  if (!$(event.target).is(".portfolio_filter ul li a")) {
          $('.portfolio_filter').removeClass('show');
          return false;
      }
  });   

  // Infinite Scroll
  var curPage = 1;
  var pagesNum = $("#pagination-selector").find("li a:last").text();   // Number of pages

  $container.infinitescroll({
      itemSelector: '.grid-item',
      nextSelector: '.portfolio-pagination li a',
      navSelector: '#pagination-selector',
      extraScrollPx: 0,
      bufferPx: 0,
      maxPage: 6,
      loading: {
          finishedMsg: "No more works",
          msgText: '<div class="loader"><span></span></div>',
          speed: 'slow',
          selector: '.load-more',
      },
  },
  // trigger Masonry as a callback
  function( newElements ) {

        var $newElems = $( newElements );
        $newElems.imagesLoaded(function(){  // Append masonry        
          $newElems.animate({ opacity: 1 });
          $container.isotope( 'appended', $newElems, true ); 
        });
        // Check last page
        curPage++;
        if(curPage == pagesNum) {
          $( '.load-more button' ).remove();
        }
        $('.load-more').find('button').css('visibility', 'visible');
      });

      $container.infinitescroll( 'unbind' );
      // jQuery
  $container.on( 'append.infinitescroll', function( event, response, path, items ) {
    console.log( 'Loaded: ' + path );
  });


      $( '.load-more button' ).on('click', function() {
        setTimeout(function()
        { 
         magnific(); 
         },1000);  
        $container.infinitescroll( 'retrieve' );
        $('.load-more').find('button').css('visibility', 'hidden');
        return false;
      });

  $(window).bind("pageshow", function(event) {
      if (event.originalEvent.persisted) {
          window.location.reload(); 
      }
  });


  function fnAjaxLoadMorePortfolio(){
    jQuery(".load-more.portfolio").on("click", function () {
      var data;
      var $el = $(this);

      $el.prop( "disabled", true ).addClass('disable');
      
      data = {
        action   : 'load_more',
        paged    : $el.attr('paged'),
        perpage  : $el.attr('perpage'),
        posttype : $el.attr('posttype'),
      }

      jQuery.ajax({
        type: "POST",
        dataType: 'json',
        url: '../wp-admin/admin-ajax.php',
        data: data,
        success: function (data) {
          console.log(data);
          if(data.respond){
            var delay = 250;
            $.map(data.post, function(obj, i) {
              var html = '<div class="col-lg-4 wow fadeInUp">';
                html += '<a href="'+obj.link+'" class="grid-item lightbox-icon">';
                html += '<figure class="portfolio-item">';
                html += '<img src="'+obj.image+'" alt="'+obj.title+'" />';
                html += '<figcaption>';
                html += '<h3 class="title">'+obj.title+'</h3>';
                html += '<span> Branding </span>';
                html += '</figcaption>';
                html += '</figure>';
                html += '</a>';
                html += '</div>';
              ;
              setTimeout(function(){ 
                jQuery('.portfolio-container').append(html);
              }, i*delay);
            });

            setTimeout(function(){ 
              $el.removeAttr("disabled").removeClass('disable');
            }, (data.post.length*delay)+ 500 );

            $el.attr('paged', data.paged);
            if(data.paged == data.max_num_page){
              $el.fadeOut('slow', function(){
                $el.remove();
              });
            }
          }         
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
        }

      });
      return false;
    });
  }
  
  function toggleClass(){
    $('.toggleActiveClass').on('click',function(){
      $(this).parent().find('.active').removeClass('active');
      $(this).addClass('active');
    })
  }

  function fnAjaxFilterNews(){
    jQuery(".filter-categorie").on("click", function () {
      var data;
      var $el = $(this);

      $el.prop( "disabled", true ).addClass('disable');
      
      data = {
        action   : 'filter_new',
        perpage  : $el.attr('perpage'),
        category : $el.attr('data-category'),
      }

      jQuery.ajax({
        type: "POST",
        dataType: 'json',
        url: '../wp-admin/admin-ajax.php',
        data: data,
        success: function (data) {
          console.log(data);
          if(data.respond){
            var delay = 250;
            jQuery('.news-container').html('');
            $.map(data.post, function(obj, i) {
              var html = '<div class="col-lg-4 wow fadeInUp">';
                html += '<a class="anews" href="'+obj.link+'">';
                html += '<figure>';
                html += '<div class="post-view-thumbnail">'+ obj.post_view +'</div>';
                html += '<img src="'+obj.image+'" />';
                html += '</figure>';
                html += '<div class="info">';
                html += '<div class="info__detail info--head">';
                html += '<h2 class="title">'+obj.title+'</h2>';
                html += '<div class="excerpt">' + obj.excerpt.substr(0,200) + '....</div>';
                html += '</div>';
                html += '<div class="info__detail info--footer row">';
                html += '<div class="col-6"><div class="category">'+obj.terms[0].name+'</div></div>';
                html += '<div class="col-6"><div class="date text-right"><span class="little">' + obj.date+ '</span></div></div>';
                html += '</div>';
                html += '</div>';
                html += '</a>';
                html += '</div>';

              setTimeout(function(){ 
                jQuery('.news-container').append(html);
              }, i*delay);
            });

            setTimeout(function(){ 
              $el.removeAttr("disabled").removeClass('disable');
            }, (data.post.length*delay)+ 500 );

            jQuery(".load-more.news").attr('paged', 1);
            jQuery(".load-more.news").attr('category', $el.attr('data-category'));
            if(data.max_num_pages > 1){
              jQuery(".load-more.news").fadeIn();
            }else{
              jQuery(".load-more.news").fadeOut('slow');
            }
          }         
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
        }

      });
      return false;
    });
  }

  function fnAjaxLoadMoreNews(){
    jQuery(".load-more.news").on("click", function () {
      var data;
      var $el = $(this);

      $el.prop( "disabled", true ).addClass('disable');
      
      data = {
        action   : 'load_more',
        paged    : $el.attr('paged'),
        perpage  : $el.attr('perpage'),
        posttype : $el.attr('posttype'),
        category : $el.attr('category'),
      }

      jQuery.ajax({
        type: "POST",
        dataType: 'json',
        url: '../wp-admin/admin-ajax.php',
        data: data,
        success: function (data) {
          console.log(data);
          if(data.respond){
            var delay = 250;
            $.map(data.post, function(obj, i) {
              var html = '<div class="col-lg-4 wow fadeInUp">';
                html += '<a class="anews" href="'+obj.link+'">';
                html += '<figure>';
                html += '<div class="post-view-thumbnail">'+ obj.post_view +'</div>';
                html += '<img src="'+obj.image+'" />';
                html += '</figure>';
                html += '<div class="info">';
                html += '<div class="info__detail info--head">';
                html += '<h2 class="title">'+obj.title+'</h2>';
                html += '<div class="excerpt">' + obj.excerpt.substr(0,200) + '....</div>';
                html += '</div>';
                html += '<div class="info__detail info--footer row">';
                html += '<div class="col-6"><div class="category">'+obj.terms[0].name+'</div></div>';
                html += '<div class="col-6"><div class="date text-right"><span class="little">' + obj.date+ '</span></div></div>';
                html += '</div>';
                html += '</div>';
                html += '</a>';
                html += '</div>';
              setTimeout(function(){ 
                jQuery('.news-container').append(html);
              }, i*delay);
            });

            setTimeout(function(){ 
              $el.removeAttr("disabled").removeClass('disable');
            }, (data.post.length*delay)+ 500 );

            $el.attr('paged', data.paged);
            if(data.paged == data.max_num_page){
              $el.fadeOut('slow');
            }
          }         
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
        }

      });
      return false;
    });
  }

  function parallaxAbout(){
    if(jQuery('#about_circle_1').length > 0){
      var scene = document.getElementById('about_circle_1');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }

    if(jQuery('#about_circle_2').length > 0){
      var scene = document.getElementById('about_circle_2');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }

    if(jQuery('#about_circle_3').length > 0){
      var scene = document.getElementById('about_circle_3');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }
  }

  function parallaxServices(){
    if(jQuery('#services_circle_1').length > 0){
      var scene = document.getElementById('services_circle_1');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }

    if(jQuery('#services_circle_1').length > 0){
      var scene = document.getElementById('services_circle_2');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }
  }

  function parallaxClient(){
    if(jQuery('#client_circle_1').length > 0){
      var scene = document.getElementById('client_circle_1');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }

    if(jQuery('#client_circle_1').length > 0){
      var scene = document.getElementById('client_circle_2');
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
      parallaxInstance.friction(0.2, 0.2);
    }

    
  }
  
  $('#vid').click(function () {
    var mediaVideo = $("#vid").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
    } else {
        mediaVideo.pause();
   }
 });
}); // document read end 




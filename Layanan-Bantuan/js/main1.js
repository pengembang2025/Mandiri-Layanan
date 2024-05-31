$(window).on("load", function (e) {
	$("table").wrap('<div class="dataTables_wrapper"></div>');
	$('.nav-lang').css({opacity: 1});
	$('.nav-lang li:nth-child(1) .language-entry-short-text').text("ID");
    $(".section-org-profile").parents("body").addClass("wrap-komDir");
    
    // adding class for page option target
    $(".wrapper-thumbnail-option .prod-box-item").each(function(){
    	var checkTarget = $(this).attr('target');
        
        if(checkTarget == '_blank' == true) {
        	
        	$(this).addClass("blank");
        	
        }else if (checkTarget == '_self' == true){
        	
        	$(this).addClass("self");
        	
        }
    });
    
    /*$("ul.nav li.nav-dropdown").hover(
	    function() {
	        var obj = $(this);

	        setTimeout(function() {
	        	obj.find('ul.dropdown-menu').css('display', 'block');
	        }, 300);
	    },
	    function() {
	        var obj = $(this);
	        setTimeout(function() {
	        	obj.find('ul.dropdown-menu').css('display', 'none');
	        }, 300);
	    }
	);*/
    
    
});

$(document).ready(function() {
	/*Freeze Menu*/
	var isDekstop = window.matchMedia("only screen and (min-width: 768px)");
	
	/*if (isDekstop.matches) {*/
		$(window).scroll(function () {
	        var scrollTop = $(this).scrollTop();
	        if(scrollTop > 250){
	            $('.navbar-bottom').addClass('animated fadeInDown navbar-fixed-top');
	        } else {
	            $('.navbar-bottom').removeClass('animated fadeInDown navbar-fixed-top');
	        }
	    });
	/*}*/

  /*$("ul.nav li.nav-dropdown").hover(
      function() {
          var obj = $(this);

          setTimeout(function() {
            obj.find('ul.dropdown-menu').css('display', 'block');
          }, 300);
      },
      function() {
          var obj = $(this);
          setTimeout(function() {
            obj.find('ul.dropdown-menu').css('display', 'none');
          }, 300);
      }
  );*/
	
	$('.fa-angle-down').click(function(){
      $('.navbar .fa-angle-up').hide();
      $('.navbar .fa-angle-down').show();
      $(this).hide();
      $(this).next('.fa-angle-up').delay(100).fadeIn();
    });
    $('.fa-angle-up').click(function() {
      $('.dropdown-backdrop').remove();
      $(this).hide();
      $(this).prev('.fa-angle-down').delay(100).fadeIn();
    });

	$('#backtotop').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
	$(".mdr-home").find(".rcw-layout > .row:nth-child(2)").wrap("<div class='container'></div>")
    $( ".mdr-breadcrumbs .breadcrumb" ).clone().insertBefore(".hero-unit.hero-unit-md.hero-page-details > .container > .mdr-content");
	$( ".mdr-breadcrumbs .breadcrumb" ).clone().insertBefore(".hero-prioritas > .container > .mdr-content");
	$( ".mdr-breadcrumbs .breadcrumb" ).clone().insertBefore(".hero-about > .container > .mdr-content");
	$( ".mdr-breadcrumbs .breadcrumb" ).clone().insertBefore(".hero-submenu > .container > img");
	$( ".mdr-breadcrumbs .breadcrumb" ).clone().insertBefore(".hero-unit-top > .container > img");
	$('.nav-lang').css({opacity: 1});
	$('.nav-lang li:nth-child(1) .language-entry-short-text').text("ID");
	//$("<li class='divider'></li>").insertAfter(".nav-lang li:nth-child(1)");
	$(".img-product.cc").parent("a.box").addClass("wrap-cc");
	$('.wrapper-split-slider #thumbnail-slider').bind("mousewheel", function() {
	    return true;
	});
	if (isDekstop.matches) {
		$(window).scroll(function() {
	        var btt = $('#backtotop');
	        if ($(document).scrollTop() > 200) {
	            btt.fadeIn();
	        }else{
	                btt.fadeOut();
	            }
	    });
	}
	$(".parent.has-child #btn-accordion").click(function(){
		$(this).parent().children(".child-pages:first").slideToggle();
		$(this).toggleClass("fa-plus-square");
		$(this).toggleClass("fa-minus-square");
	});
	
/*	$(".parent.has-child .fa-minus-square").click(function(){
		$(this).parent().children(".child-pages:first").slideToggle();
		$(this).removeClass("fa-minus-square");
		$(this).addClass("fa-plus-square");
	});*/
	
	 /*$(".nav-tools").click(function(){
      $(this).find('.hover-tooltip').hide();
    });*/

    $(".promotion-slider").owlCarousel({
    	margin: 0,
        nav: true,
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        thumbs: true,
        thumbsPrerendered: true,
        navText : ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
	});

    $(".new-static-banner").owlCarousel({
    	margin: 0,
        nav: false,
        loop: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoHeight:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    });
    
    $(".individual-slider").owlCarousel({
    	margin: 0,
        nav: false,
        loop: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    });
		
    /*$(".popup-content").owlCarousel({
    	margin: 0,
        nav: true,
        loop: false,
        mouseDrag: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    });*/
    
    
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate : 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: false,
      autoHeight: true,
      nav: false,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
    
    $(".wrapperPromotion #sync1 .owl-item .item, .wrapperPromotion #sync2 .owl-item .item").find('img').each(function(n, image){
        var image = $(image);
        var thisurl = $(this).attr('src');
        image.parent(".wrapperPromotion #sync1 .item > a, .wrapperPromotion #sync2 .item > a").css('background-image', 'url(' + thisurl + ')');
      });
    
    // detect IE8 and above, and edge
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $("html").addClass("edge")
    }
    
    //click function profile popup

    $(".section-org-profile").parents("body").addClass("wrap-komDir");
    
    function removeAllAttr() {
		$(".modal-body .org-profile-details-desc").text("");
		$(".modal-body .org-profile-details .org-profile-details-name").text("");
		$(".modal-body .org-profile-details .org-profile-details-title").text("");
    }
    
    $(".org-profile-item").on("click", function(){
    	
    	var getSrcImg = $(this).find("img.org-profile-details-img").attr("src");
    	var getAltImg = $(this).find("img.org-profile-details-img").attr("alt");
    	var getName = $(this).find(".org-profile-desc > h4").text();
    	var getPosition = $(this).find(".org-profile-desc > p").text();
    	var getDetail = $(this).find(".detailProfile > p");
    	
    	$(this).parents(".wrap-komDir").find(".modal-content .close").click(function(){
    		$(".modal-body .org-profile-details-desc").text("");
    	});

    	$(this).parents(".wrap-komDir").find(".modal-profile-sample .modal-body img").attr('src',getSrcImg).attr('alt',getAltImg);
    	$(this).parents(".wrap-komDir").find(".modal-profile-sample .org-profile-details .org-profile-details-name").text(getName);
    	$(this).parents(".wrap-komDir").find(".modal-profile-sample .org-profile-details .org-profile-details-title").text(getPosition);
    	$(this).parents(".wrap-komDir").find(getDetail).clone().appendTo(".org-profile-details-desc");
    	
    });
    
    $(".close-modal-boots").click(function(){
    	removeAllAttr()
    	$("#myModal").modal('hide');
	});
    //end
    
    $(".lexicon-icon-plus").parent().parent(".icon-monospaced").css("pointer-events", "none");
    
    //ScrollDown to Anchor
    $(".fee-scrollDown>li>a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    
    $(".nav-scrollDown").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});

/*Mandiri JS*/

var dropdownSelectors = $('.dropdown, .dropup');

//Custom function to read dropdown data
//=========================
function dropdownEffectData(target) {
// @todo - page level global?
var effectInDefault = null,
   effectOutDefault = null;
var dropdown = $(target),
   dropdownMenu = $('.dropdown-menu', target);
var parentUl = dropdown.parents('ul.nav');

// If parent is ul.nav allow global effect settings
if (parentUl.size() > 0) {
 effectInDefault = parentUl.data('dropdown-in') || null;
 effectOutDefault = parentUl.data('dropdown-out') || null;
}

return {
 target:       target,
 dropdown:     dropdown,
 dropdownMenu: dropdownMenu,
 effectIn:     dropdownMenu.data('dropdown-in') || effectInDefault,
 effectOut:    dropdownMenu.data('dropdown-out') || effectOutDefault,
};
}

//Custom function to start effect (in or out)
//=========================
function dropdownEffectStart(data, effectToStart) {
if (effectToStart) {
 data.dropdown.addClass('dropdown-animating');
 data.dropdownMenu.addClass('animated');
 data.dropdownMenu.addClass(effectToStart);
}
}

//Custom function to read when animation is over
//=========================
function dropdownEffectEnd(data, callbackFunc) {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
data.dropdown.one(animationEnd, function() {
 data.dropdown.removeClass('dropdown-animating');
 data.dropdownMenu.removeClass('animated');
 data.dropdownMenu.removeClass(data.effectIn);
 data.dropdownMenu.removeClass(data.effectOut);

 // Custom callback option, used to remove open class in out effect
 if(typeof callbackFunc == 'function'){
   callbackFunc();
 }
});
}

//Bootstrap API hooks
//=========================
dropdownSelectors.on({
"show.bs.dropdown": function () {
 // On show, start in effect
 var dropdown = dropdownEffectData(this);
 dropdownEffectStart(dropdown, dropdown.effectIn);
},
"shown.bs.dropdown": function () {
 // On shown, remove in effect once complete
 var dropdown = dropdownEffectData(this);
 if (dropdown.effectIn && dropdown.effectOut) {
   dropdownEffectEnd(dropdown, function() {});
 }
},
"hide.bs.dropdown":  function(e) {
 // On hide, start out effect
 var dropdown = dropdownEffectData(this);
 if (dropdown.effectOut) {
   e.preventDefault();
   dropdownEffectStart(dropdown, dropdown.effectOut);
   dropdownEffectEnd(dropdown, function() {
     dropdown.dropdown.removeClass('open');
   });
 }
},
});

$(window).resize(function() {
if ($(this).width() > 768) {
 $(function($) {
   // $('.hero-unit.hero-home').parallax("50%", 0.3);
   $('.home-currency-dark').parallax("50%", 0.2);
   $('.home-unit.hero-home-about').parallax("50%", 0.2);
 });
}
});

$(document).ready(function() {
	$(window).resize();
		$('.nav-search').click(function() {
		$('.search_box').slideToggle();
	});
		
	// adding class for page option target
    $(".wrapper-thumbnail-option .prod-box-item").each(function(){
    	var checkTarget = $(this).attr('target');
        
        if(checkTarget == '_blank' == true) {
        	
        	$(this).addClass("blank");
        	
        }else if (checkTarget == '_self' == true){
        	
        	$(this).addClass("self");
        	
        }
    });
    
    //exclusive promotion in priority
    //give an anchor to empty href and delete attr target
    $(".module-feature .wrap-box > a").each(function(){

    	var cekAttr = $(this).attr('href');

    	if(cekAttr === '') {
    		$(this).attr('href','#');
    		$(this).attr('target','_self');
    	} 
    });
		
});


$(document).ready(function() {
   //animation
   $('.fadeinleft-viewport').viewportChecker({
       classToAdd: 'visible animated fadeInLeft',
       offset: 100
   });
   $('.fadeinright-viewport').viewportChecker({
       classToAdd: 'visible animated fadeInRight',
       offset: 100
   });
   $('.fadein-viewport').viewportChecker({
       classToAdd: 'visible animated fadeIn',
       offset: 100
   });
   $('.fadeindown-viewport').viewportChecker({
       classToAdd: 'visible animated fadeInDown',
       offset: 100
   });
   $('.fadeinup-viewport').viewportChecker({
       classToAdd: 'visible animated fadeInUp',
       offset: 100
   });
   $('.slideinleft-viewport').viewportChecker({
     classToAdd: 'visible animated slideInLeft',
     offset: 100
   });
   $('.slideinright-viewport').viewportChecker({
     classToAdd: 'visible animated slideInRight',
     offset: 100
   });
   $('.zoomin-viewport').viewportChecker({
     classToAdd: 'visible animated zoomInDown',
     offset: 100
   });
   $('.rotatein-viewport').viewportChecker({
     classToAdd: 'visible animated rotateIn',
     offset: 100
   });
   $('.slideindown-viewport').viewportChecker({
     classToAdd: 'visible animated slideInDown',
     offset: 100
   });
});

$(window).load(function() {
    $("#loader").delay(3000).fadeOut("slow");
});

/*
$(document).mouseup(function (e) {
    function containerClose($cont){
        var container = $cont;
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $cont.hide('fast');
            $("#fade").hide();
            $('#').remove('iframe');
        }
    }
    
    containerClose($("#map"));
    containerClose($("#payment"));
});
*/

var ready;

ready = (function() {
    $("body").append('<div id="loader" role="load">            <i class="fa fa-power-off"></i>            <span><p>CARGANDO<label id="dot1">.</label><label id="dot2">.</label><label id="dot3">.</label></p></span></div>');
    
  /*  setTimeout(function(){
            $("#loader").remove();
    }, 4500);*/
    
    var owl = $("#owl-demo");
    
    owl.owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 2800
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
    
    $( "#map-btn" ).click(function() {
        $( '<iframe src="https://www.google.com/maps/d/embed?pb=!1m14!1m12!1m3!1d3925.976313445235!2d-67.57991249999999!3d10.26349194444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sve!4v1444426718427&mid=zQWXgAI4yDWQ.kH7bKXyix5tI"></iframe>' ).appendTo( ".embed-container" );
        $("#map").show(100); 
        $("#fade").show();
    });

    
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        $('#home').removeClass('current');
        $('#acerca').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    
    //smooth scroll to about section
    $('#about').on('click', function(event){
        $('#home').removeClass('current');
        $('#acerca').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to services section
    $('#services').on('click', function(event){
        $('#home').removeClass('current');
        $('#servicios').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to contact us section
    $('#contact').on('click', function(event){
        $('#home').removeClass('current');
        $('#contactenos').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

$(document).ready(ready);
/*
var current;

$(function() { 
    $('body').mousewheel(function(event, delta) {
        var $current = $('div.current');
        $( "div" ).remove( "#window-resizer-tooltip" );
        console.log(delta);
        console.log($current);
                
        if (delta > 0) {
            $prev = $current.prev();
            
            if ($prev.length) {
                $('body').scrollTo($prev, 200);
                $current.removeClass('current');
                $prev.addClass('current');
            }
        } else {
            $next = $current.next();
            
            if ($next.length) {
                $('body').scrollTo($next, 200);
                $current.removeClass('current');
                $next.addClass('current');
            }
        }
                                         
        event.preventDefault();
    });
});*/
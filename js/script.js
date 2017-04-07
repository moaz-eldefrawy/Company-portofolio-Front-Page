 /* global $, alert, console*/

$(function(){
    
    "use strict";
    
    // Adjust Header Height
    var myheader = $('.header');
    myheader.height($(window).height());
    
    $(window).resize(function(){
        myheader.height($(window).height());
        
          var directors = $('.header .bx-wrapper .bx-controls-direction a');
        $('.header .bx-wrapper').css({ "padding-top" : ( $(window).height() - $(".bx-wrapper").height() )/2 - $(".navbar").height() , });
        directors.css({ "top" : $(window).height()*50/100 - $(".navbar").height(), });
    });
    
    //Links Active Class
    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass('active');
         // Smooth Scroll To Div
        var a = $(this).attr("class");
        console.log(a);
        $("html, body").animate({
            scrollTop : $('#'+ a ).offset().top        
        } , 1000);
    });
    // trigger the bxslider
    $('.bxslider').bxSlider({ 
     });

    // Adjusting bxslider
    var directors = $('.header .bx-wrapper .bx-controls-direction a');
    $('.header .bx-wrapper').css({ "padding-top" : ( $(window).height() - $(".bx-wrapper").height() )/2 - $(".navbar").height() , });
    directors.css({ "top" : $(window).height()*50/100 - $(".navbar").height(), });
    
    // hovering on picture
    $(".ourteam .pictures img").click(function(){
        $(".ourteam .coloring").css("display","block");
        setTimeout(function(){
            $(".ourteam .coloring").css("display","none");
         }, 2000);
    });
    
       
    // Our auto Slider Code
    function autoslider(next){
        $(".slider .active").each(function(){
            $(this).delay(2000).fadeOut(1000, function(){
                $(this).removeClass('active');
                $(".slider div").eq(next%4).addClass('active').fadeIn();
                console.log(next);
                autoslider(next+1);
            });
        });
    };
    autoslider(1);
    
    // trigger mixit up
    $('#container').mixItUp();
    
    // shuffling
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    /// adjusting NiceScroll
    $("html").niceScroll({
        cursorcolor : "#1abc9c",
        cursorwidth : "6.5px",
        cursorborder : "#1abc9c"
    });
  
});
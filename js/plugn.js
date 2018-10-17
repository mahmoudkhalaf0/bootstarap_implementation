/*global $, window*/
$(function () {
    
    "use strict";
    //nicescroll
    $("html").niceScroll({
        cursorcolor: '#f00',
        cursorwidth:'8',
        cursorborderradius:'none',
        cursorborder:'none'
    });
    //show and hidden the color option 
    
    $('.gear-check').click(function () {
        
        $('.color-option').fadeToggle();  
    });
    
    //change the li color according to his real color
    var color_li = $('.color-option ul li');
    color_li
        .eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#10f107').end()
        .eq(2).css('backgroundColor', '#eb0cef').end()
        .eq(3).css('backgroundColor', '#eadd0d').end()
        .eq(4).css('backgroundColor', '#1500ff');
    
    color_li.click(function () {
       
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));
    });


//loading bage
    $(window).on('load', function () {
        $(".spinner").fadeOut(3000, function () {
            $("body").css("overflow", "auto");
            $(".screen-loading h1").fadeOut(2000, function () {
                $(".screen-loading").fadeOut(1000, function () {
                    $(this).remove();  
                });
            });
        });
    });
    
    var mar = $(window).width(),
        martop = $(window).height();
    
    $(window).each(function () {
        
        $(".screen-loading h1").css("marginLeft", (mar - $(".screen-loading h1").length)  / 2 - 150);
        $(".screen-loading h1").css("marginTop", (martop - $(".screen-loading h1").length) / 2 - 20);
        $(".spinner").css("marginTop", (martop - $(".spinner").width())  / 2);
    });
    
    //scroll to top
    var scrolltop = $(".scroll");
    
    $(window).scroll(function () {
        
        ($(window).scrollTop() > 400) ? scrolltop.show() : scrolltop.hide();
        
    });
    
    $(".scroll i").on('click', function () {
        
        $("html,body").animate({scrollTop: 0}, 1000);
        
    });
});
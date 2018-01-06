/*globals $:false */

//const updateFooter = function(div) {
//    $("footer").css("background-image") = $(div).css("background-image");
//}

$(".pageLink").click(function () {
    "use strict";
    
    if ($(this).hasClass("webLink")) {
        $("#bigNav").fadeOut();
        $(".subPage").fadeOut();
        $("#webPage").load("webdev.html");
        $("#webPage").css("display", "flex");
    }
    
    else if ($(this).hasClass("climbLink")) {
        $("#bigNav").fadeOut();
        $(".subPage").fadeOut();
        $("#climmbPage").load("climb.html");
        $("#climbPage").css("display", "flex");
    }
    
    else if ($(this).hasClass("musicLink")) {
        $("#bigNav").fadeOut();
        $(".subPage").fadeOut();
        $("#musicPage").load("music.html");
        $("#musicPage").css("display", "flex");
    }
    
    else if ($(this).hasClass("contactLink")) {
        console.log("clicked contact");
        $("#bigNav").fadeOut();
        $(".subPage").fadeOut();
        $("#contactPage").load("contact.html");
        $("#contactPage").css("display", "flex");
    }
    
    else {
        console.log("clicked main header");
        $(".subPage").fadeOut();
        $("#bigNav").css("display", "flex");
        $("#bigNav button").fadeIn();
    }
});
/*globals $:false */

//const updateFooter = function(div) {
//    $("footer").css("background-image") = $(div).css("background-image");
//}

$(".pageLink").click(function () {
    "use strict";
    
    if ($(this).hasClass("webLink")) {
        $("#bigNav").fadeOut(function () {
            $(".subPage").fadeOut(function() {
                $("#webPage").load("webdev.html", function () {
                    $("#webPage").css("display", "flex").hide().fadeIn();
                });
            });
        });
    }
    
    else if ($(this).hasClass("climbLink")) {
        $("#bigNav").fadeOut(function () {
            $(".subPage").fadeOut(function() {
                $("#climbPage").load("climb.html", function () {
                    $("#climbPage").css("display", "flex").hide().fadeIn();
                });
            });
        });
    }
    
    else if ($(this).hasClass("musicLink")) {
        $("#bigNav").fadeOut(function () {
            $(".subPage").fadeOut(function() {
                $("#musicPage").load("music.html", function () {
                    $("#musicPage").css("display", "flex").hide().fadeIn();
                });
            });
        });
    }
    
    else if ($(this).hasClass("contactLink")) {
        $("#bigNav").fadeOut(function () {
            $(".subPage").fadeOut(function() {
                $("#contactPage").load("contact.html", function () {
                    $("#contactPage").css("display", "flex").hide().fadeIn();
                });
            });
        });
    }
    
    else {
        $(".subPage").fadeOut(function() {  
            $("#bigNav").css("display", "flex").hide().fadeIn();   
        });       
    }
});
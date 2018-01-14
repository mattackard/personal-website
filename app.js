

const changePage = function (pageID, pageSRC, displayValue) {
    $(".subPage").fadeOut(function () {
        $(pageID).load(pageSRC, function () {
            $(pageID).css("display", displayValue).hide().fadeIn();
        });
    });
}

const fadeBG = function (imageID) {
    $(".currentBG").fadeOut().addClass("hiddenBG");
    $(imageID).removeClass("hiddenBG").addClass("currentBG").fadeIn();
}

$(".pageLink").click(function () {
    "use strict";
    
    if ($(this).hasClass("webLink")) {
        changePage("#webPage","webdev.html","flex");
        fadeBG("#webPageBG");
    }
    else if ($(this).hasClass("climbLink")) {
        changePage("#climbPage","climb.html","flex");
        fadeBG("#climbPageBG");
    }
    
    else if ($(this).hasClass("musicLink")) {
        changePage("#musicPage","music.html","flex");
        fadeBG("#musicPageBG");
    }
    
    else if ($(this).hasClass("contactLink")) {
        changePage("#contactPage","contact.html","flex");
        fadeBG("#contactPageBG");
    }
    
    else if ($(this).hasClass("homeLink")) {
        $(".subPage").fadeOut(function () {  
            $("#bigNav").css("display", "flex").hide().fadeIn();   
        });    
        fadeBG("#mainPageBG");
    }
});
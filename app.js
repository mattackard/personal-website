

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
        if ($("#webPage").css("display") === "none") {
            changePage("#webPage","webdev.html","flex");
            fadeBG("#webPageBG");    
        }    
    }
    else if ($(this).hasClass("climbLink")) {
        if ($("#climbPage").css("display") === "none") {
            changePage("#climbPage","climb.html","flex");
            fadeBG("#climbPageBG");
        }
    }
    
    else if ($(this).hasClass("musicLink")) {
        if ($("#musicPage").css("display") === "none") {
            changePage("#musicPage","music.html","flex");
            fadeBG("#musicPageBG");
        }
    }
    
    else if ($(this).hasClass("contactLink")) {
        if ($("#contactPage").css("display") === "none") {
            changePage("#contactPage","contact.html","flex");
            fadeBG("#contactPageBG");
        }
    }
    
    else if ($(this).hasClass("homeLink")) {
        if ($("#bigNav").css("display") === "none") {
            $(".subPage").fadeOut(function () {  
                $("#bigNav").css("display", "flex").hide().fadeIn();   
            });    
            fadeBG("#mainPageBG");
        }
    }
});
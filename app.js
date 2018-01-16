
const fadeBG = function (imageID) {
    $(".currentBG").fadeOut(800).addClass("hiddenBG");
    $(imageID).removeClass("hiddenBG").addClass("currentBG").fadeIn(800);
}

const changePage = function (pageID, pageSRC, displayValue, imageID) {
    if ($(pageID).css("display") === "none") {
        $(".subPage").fadeOut(function () {
            $(pageID).load(pageSRC, function () {
                $(pageID).css("display", displayValue).hide().fadeIn();
            });
        });
        fadeBG(imageID);
    }
}

$(".pageLink").click(function () {
    "use strict";
    
    if ($(this).hasClass("webLink")) {
            changePage("#webPage","webdev.html","flex","#webPageBG");    
    }
    else if ($(this).hasClass("climbLink")) {
            changePage("#climbPage","climb.html","flex","#climbPageBG");
    }
    else if ($(this).hasClass("musicLink")) {
            changePage("#musicPage","music.html","flex","#musicPageBG");
    }
    else if ($(this).hasClass("contactLink")) {
            changePage("#contactPage","contact.html","flex","#contactPageBG");
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
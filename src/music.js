console.log(document.querySelector("audio source").attr("src"));

let songSource = document.querySelector("audio source").attr("src");
    
document.querySelector(".songSelect").click(function() {
    songSource = document.querySelector(this).attr("href");
    document.querySelector("audio source").attr("src", songSource);
    console.log(document.querySelector("audio source").attr("src"));
});
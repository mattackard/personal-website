console.log($("audio source").attr("src"));

var songSource = $("audio source").attr("src");
    
$(".songSelect").click(function() {
    songSource = $(this).attr("href");
    $("audio source").attr("src", songSource);
    console.log($("audio source").attr("src"));
});
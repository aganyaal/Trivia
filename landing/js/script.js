$(document).ready(function(){
    $(".oldenough").hide();
    $("button#overage").click(function(event){
        $("#oldenough").show();
        $("#start").show();
    });
});

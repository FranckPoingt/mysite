AOS.init();

$(document).ready(function(){ 
    $("#imageDivLink").mouseenter(function(){
        $( "#contentDivImg" ).slideToggle( "slow", function() {
    // Animation complete.
        });
    });
});
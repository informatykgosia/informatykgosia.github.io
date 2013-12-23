$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $( ".santa-box img#good" ).fadeOut(1500);
         $( ".santa-box img#bad" ).fadeIn(1000);
         $( "section h1#foryou" ).fadeIn(1500);
         $( ".santa-box img#scroll" ).fadeOut(100);
        
         

    } else {
        console.log('there');
        $( ".santa-box img#good" ).fadeIn(1000);
        $( ".santa-box img#bad" ).fadeOut(1500);
        $( "section h1#foryou" ).fadeOut(1500);
         
        
        
    }
});
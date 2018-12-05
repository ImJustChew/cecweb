$(function() {
  // Handler for .ready() called.

  
   $('#home').click(function(e){    
    $('#home-container, #torrents-container, #contact-container').fadeOut('slow', function(){
        $('#home-container').fadeIn('slow');
    });
});

  $('#torrents').click(function(e){    alert("rot");
       $('#home-container, #torrents-container, #contact-container').fadeOut('slow', function(){
           $('#torrents-container').fadeIn('slow');
       });
   });

    $('#contact').click(function(e){    
         $('#home-container, #torrents-container, #contact-container').fadeOut('slow', function(){
            $('#contact-container').fadeIn('slow');
        });
    });
 });
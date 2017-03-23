// YOUR SCRIPTS GO HERE

//SIDE BAR
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});

//WEATHER
// Spokane
$.simpleWeather({
    location: 99223,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane i').addClass('icon-'+ weather.code);
      
      // Get Condition Code
      console.log(weather.code);
      
      if ( weather.code >= 0 && weather.code <= 12 ) {
         $('body').addClass('storm');   
      }
      
      if ( weather.code >= 13 && weather.code <= 18 ) {
         $('body').addClass('snow');   
      }
      
      if ( weather.code >= 19 && weather.code <= 22 ) {
         $('body').addClass('haze');   
      }
      
      if ( weather.code >= 23 && weather.code <= 24 ) {
         $('body').addClass('wind');   
      }
      
      if ( weather.code >= 25 && weather.code <= 30 ) {
         $('body').addClass('cloud');   
      }
      
      
      if ( weather.code >= 31 && weather.code <= 36 ) {
         $('body').addClass('sunny');   
      }
      
      
      if ( weather.code >= 37 && weather.code <= 47 ) {
         $('body').addClass('storm');   
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look the fuck outside');
    }
  
  });


// Long Beach for SPRING BREAK 
$.simpleWeather({
    location: 98631,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney i').addClass('icon-'+ weather.code);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look the fuck outside');
    }
  
  });


//Location
if ('geolocation' in navigator) {

   $('#me').show(); 

} else {
  
  $('#me').hide();
  $('#me').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('#me').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Get Weather
var getWeather = function(location) {
  
    $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#me .temp').text(weather.temp);
      $('#me .city').text(weather.city);
      $('#me i').addClass('icon-'+ weather.code);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Oops! Something went wrong, take a peak outside.');
    }
  
  });
  
};


//FORECAST
    $('#forecast figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('#forecast figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('#forecast figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('#forecast figure:nth-child(1) .high').text(weather.forecast[0].high);
      
       //forecast day 2
      $('#forecast figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('#forecast figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('#forecast figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('#forecast figure:nth-child(2) .high').text(weather.forecast[1].high);
      
      //forecast day 3
      $('#forecast figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('#forecast figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('#forecast figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('#forecast figure:nth-child(3) .high').text(weather.forecast[2].high);
     
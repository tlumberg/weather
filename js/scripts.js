// YOUR SCRIPTS GO HERE

//SIDE BAR
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});

//WEATHER

//Location
if ('geolocation' in navigator) {

   $('#homescreen').show(); 

} else {
  
  $('#homescreen').hide();
  $('#homescreen').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('#homescreen').click( function() {
      
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
      $('#homescreen .temp').text(weather.temp);
      $('#homescreen .city').text(weather.city);
      $('#homescreen i').addClass('icon-'+ weather.code);
      $('#homescreen .high').text(weather.high);
      $('#homescreen .low').text(weather.low);
        
        
        // Get Condition Code
      console.log(weather.code);
      
      if ( weather.code >= 0 && weather.code <= 12 ) {
         $('#homescreen').addClass('storm');   
      }
      
      if ( weather.code >= 13 && weather.code <= 18 ) {
         $('#homescreen').addClass('snow');   
      }
      
      if ( weather.code >= 19 && weather.code <= 22 ) {
         $('#homescreen').addClass('haze');   
      }
      
      if ( weather.code >= 23 && weather.code <= 24 ) {
         $('#homescreen').addClass('wind');   
      }
      
      if ( weather.code >= 25 && weather.code <= 30 ) {
         $('#homescreen').addClass('cloud');   
      }
      
      
      if ( weather.code >= 31 && weather.code <= 36 ) {
         $('#homescreen').addClass('sunny');   
      }
      
      
      if ( weather.code >= 37 && weather.code <= 47 ) {
         $('#homescreen').addClass('storm');   
      }

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('You fucked up, look outside.');
    }
  
  });
  
};

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
      $('#spokane .high').text(weather.high);
      $('#spokane .low').text(weather.low);
      
      // Get Condition Code
      console.log(weather.code);
      
      if ( weather.code >= 0 && weather.code <= 12 ) {
         $('#spokane').addClass('storm');   
      }
      
      if ( weather.code >= 13 && weather.code <= 18 ) {
         $('#spokane').addClass('snow');   
      }
      
      if ( weather.code >= 19 && weather.code <= 22 ) {
         $('#spokane').addClass('haze');   
      }
      
      if ( weather.code >= 23 && weather.code <= 24 ) {
         $('#spokane').addClass('wind');   
      }
      
      if ( weather.code >= 25 && weather.code <= 30 ) {
         $('#spokane').addClass('cloud');   
      }
      
      
      if ( weather.code >= 31 && weather.code <= 36 ) {
         $('#spokane').addClass('sunny');   
      }
      
      
      if ( weather.code >= 37 && weather.code <= 47 ) {
         $('#spokane').addClass('storm');   
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look the fuck outside');
    }
  
  });


// Cheney 
$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney i').addClass('icon-'+ weather.code);
      $('#cheney .high').text(weather.high);
      $('#cheney .low').text(weather.low);
      
        // Get Condition Code
      console.log(weather.code);
      
      if ( weather.code >= 0 && weather.code <= 12 ) {
         $('#cheney').addClass('storm');   
      }
      
      if ( weather.code >= 13 && weather.code <= 18 ) {
         $('#cheney').addClass('snow');   
      }
      
      if ( weather.code >= 19 && weather.code <= 22 ) {
         $('#cheney').addClass('haze');   
      }
      
      if ( weather.code >= 23 && weather.code <= 24 ) {
         $('#cheney').addClass('wind');   
      }
      
      if ( weather.code >= 25 && weather.code <= 30 ) {
         $('#cheney').addClass('cloud');   
      }
      
      
      if ( weather.code >= 31 && weather.code <= 36 ) {
         $('#cheney').addClass('sunny');   
      }
      
      
      if ( weather.code >= 37 && weather.code <= 47 ) {
         $('#cheney').addClass('storm');   
      }
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look the fuck outside');
    }
  
  });




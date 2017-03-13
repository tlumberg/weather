// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 99205,
  unit: 'f',
  success: function(weather){
      
      // Weather Check
    
      console.log(weather);
    
      // Display 
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.temp').text(weather.temp);
    $('.thumb img').attr('src', weather.image);
      
    },
  error:  function(error){
      console.log('No Weather Found'); 
    }
});

// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');

// Foursquare API Info
// const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
// const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';

const url = "https://api.foursquare.com/v2/venues/explore?near="


// // WEATHER API Info
const apiKey =""
const weatherUrl = 'http://api.weatherstack.com/current?access_key='


// Add AJAX functions here:

const getVenues = async () => {

    const city = inputField.value
    const urlToFetch = url+city
  
}

const getForecast = async () => {
  
}






// Execute function

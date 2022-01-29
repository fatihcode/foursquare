// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');
const destination = document.querySelector('#destination');
const container = document.querySelector('.container');
const venueDivs = document.querySelector("#venues");
const sportsDiv = document.querySelector("#sports");
const weatherDiv = document.querySelector("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//----------------------------------------------------------------------


// Foursquare API Info
const url = "https://api.foursquare.com/v2/venues/explore?near="
const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';


//----------------------------------------------------------------------


// WEATHER API Info
const weatherUrl = 'http://api.weatherstack.com/current?access_key='
const apiKey = '17b54315d6659d0f952b4960b9d11400'


//----------------------------------------------------------------------



const getVenues = async () => {

    const city = inputField.value
    const urlToFetch = url + city + "&limit=8&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20201203"

    try {
        const response = await fetch(urlToFetch)

        if (response.ok) {
            const json = await response.json()
            // console.log(json)
            const venues = json.response.groups[0].items;
            createVenuesHTML(venues)

        }
    } catch (error) {
        console.log(error)
    }
}


//----------------------------------------------------------------------    


const getForecast = async () => {

    const city = inputField.value;
    const urlToFetch = weatherUrl + apiKey + "&query=" + city

    try {

        const response = await fetch(urlToFetch)

        if (response.ok) {
            const json = await response.json()
            // console.log(json)
            createWeatherHTML(json)
        }
    } catch (error) {
        console.log(error)
    }
}


//----------------------------------------------------------------------


submitBtn.onclick = () => {
    venueDivs.innerHTML = ""
    weatherDiv.innerHTML = ""
    container.style.visibility = "visible";
    getForecast()
    getVenues()
}
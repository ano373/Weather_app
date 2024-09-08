import "./styles.css";
import logoImg from "../img/weather.png";
import { constructURL, apiResponse } from "./api.js";

import { degreeUnit } from "./degreeUnit.js";
const navBarContainer = document.querySelector(".navbar");
const imgElement = document.querySelector("#logo");
imgElement.src = logoImg;
imgElement.width = 100;
imgElement.height = 100;

const input = document.querySelector("#searchbar");
input.setAttribute('type', 'text');
input.placeholder = "search for a city";

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const city = document.getElementById('searchbar').value;
    if(city!== ''){
        const url = constructURL(city,degreeUnit);
        apiResponse(url).then(json =>{
            console.log(json);
        });

    }else{
        alert('u must provide a city name');
    }
    
    
});








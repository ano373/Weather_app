import "./styles.css";
import logoImg from "../img/weather.png";
import "./api.js";
const navBarContainer = document.querySelector(".navbar");
const imgElement = document.querySelector("#logo");
imgElement.src = logoImg;
imgElement.width = 100;
imgElement.height = 100;

const input = document.querySelector("#searchbar");
input.setAttribute('type', 'text');
input.placeholder = "search for a city";








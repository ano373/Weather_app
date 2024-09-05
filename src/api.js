import promptSync from "prompt-sync";
import { format } from "date-fns";
const APIKEY = "NXSNKU7CCWPWNFRVP42GFX2E5";
const prompt = promptSync();

const today = format(new Date(), "yyyy-MM-dd");

async function getWeather() {
  let city = prompt("enter a city name: ");
  console.log(city);
  console.log(today);
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${today}?unitGroup=metric&key=${APIKEY}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
}

getWeather()
.then((result) => {
  const json = result;
  const day = json.days[0];
  console.log(json);
})
.catch(error =>{
    console.error('Error:', error);
});


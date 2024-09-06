import promptSync from "prompt-sync";
import { format, addWeeks } from "date-fns";
const prompt = promptSync();

function apiRequest(city, unitGroup) {
  const APIKEY = "NXSNKU7CCWPWNFRVP42GFX2E5";
  const today = format(new Date(), "yyyy-MM-dd");
  let nextweek = addWeeks(today, 1);
  nextweek = format(nextweek, "yyyy-MM-dd");

  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/` +
    `services/timeline/${city}/${today}/${nextweek}?unitGroup=${unitGroup}&key=${APIKEY}`;
  return url;
}

async function apiResponse() {
  let city = "rome";
  const unitGroup = "metric";
  const url = apiRequest(city, unitGroup);
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

async function WeekForcast() {
  try {
    const json = await apiResponse();
    const week = json.days;
    return week;
  } catch (error) {
    console.log("Error: " + error);
  }
}

async function todayWeather() {
  const week = await WeekForcast();
  const today = week[0];
  console.log(today);
  const { temp, humidity, visibility, windspeed, sunrise, sunset, precipprob } = today;

  return { temp, humidity, visibility, windspeed, sunrise, sunset, precipprob };
}

async function weekWeather() {
  const week = await WeekForcast();

  const attributes = ["datetime", "temp", "windspeed"];

  const filteredData = week.map((item) => {
    return attributes.reduce((obj, attr) => {
      if (item[attr] !== undefined) {
        obj[attr] = item[attr];
      }
      return obj;
    }, {});
  });
  return filteredData;
}

todayWeather()
  .then((today) => {
    
  })
  .catch((error) => {
    console.error("Error fetching weather:", error);
  });

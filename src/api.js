import { format, addWeeks } from "date-fns";


const input = document.querySelector('#searchbar');

function urlParameters(APIKEY, city, unitGroup) {
  this.APIKEY = APIKEY;
  this.city = city;
  this.unitGroup = unitGroup;
}

function dateHandle() {
  let today = format(new Date(), "yyyy-MM-dd");
  let nextweek = addWeeks(today, 1);
  nextweek = format(nextweek, "yyyy-MM-dd");
  return { today, nextweek };
}


function constructURL(city,unitGroup) {
  const params = new urlParameters(
    "NXSNKU7CCWPWNFRVP42GFX2E5",
    city,
    unitGroup
  );
  const date = dateHandle();

  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/` +
    `services/timeline/${params.city}/${date.today}/${date.nextweek}`+
    `?unitGroup=${params.unitGroup}&key=${params.APIKEY}`;
  return url;
}

async function apiResponse(url) {
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





export { constructURL, apiResponse };

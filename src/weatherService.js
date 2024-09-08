import { apiResponse } from "./api.js";




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
    const { temp, humidity, visibility, windspeed, sunrise, sunset, precipprob } =
      today;
  
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

  todayWeather.then((result =>{
    console.log(result);
  }));
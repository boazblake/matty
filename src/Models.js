import { getCurrentWeatherTask, getForcastWeatherTask } from "./services/requests";
import Task from 'data.task'



const Models = {
  Location: { lat: 29.7604, lon: -95.366302 },
  ForcastDays: 10,
  GetCurrentWeather: location => getCurrentWeatherTask(location),
  GetForcastWeatherTask: location => getForcastWeatherTask(location),
  OnError: function(error) {
    Models.Errors  = error
    console.log('onE', Models)
  },
  OnSuccess: function(data) {
    Models.Data = data
    console.log('onS', Models)
  }
};

export default Models;

import {
  droneWeatheTask,
} from "./services/requests.js";

const Models = {
  getWeather: ({ lat, long, time }) => droneWeatheTask({ lat, long, time }),
  data: [],
  Errors: [],
};

export default Models;

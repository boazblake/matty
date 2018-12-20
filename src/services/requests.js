import m from "mithril";
import Task from "data.task";
import apiKey from '../services.js'

const baseUrl = `https://api.darksky.net/forecast/${apiKey}`;

export  const getWeatherTask = ({lat,long, time}) =>
  new Task((rej, res) =>
    m
      .request({
        method: "GET",
        url: `${baseUrl}/${lat},${long},${time}`,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then(res, rej)
  );

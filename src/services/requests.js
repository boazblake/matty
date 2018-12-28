import m from "mithril";
import Task from "data.task";
import apiKey from '../../secrets.js'

const baseUrl = `http://api.apixu.com/v1`;

export const getCurrentWeatherTask = ({lat,lon}) =>
  new Task((rej, res) =>
    m
      .request({
        method: "GET",
        url: `${baseUrl}/current.json?key=${apiKey}&q=${lat},${lon}`,
        withCredentials: false,
        headers: { "Content-Type": "application/json", "Accept": "*/*"},
      })
      .then(res, rej)
  );


export const getForcastWeatherTask = ({ lat, lon }) => days => 
  new Task((rej, res) =>
    m
      .request({
        method: "GET",
        url: `${baseUrl}/forecast.json?key=${apiKey}&q=${lat},${lon}&days=${days}`,
        withCredentials: false,
        headers: { "Content-Type": "application/json", "Accept": "*/*" },
      })
      .then(res, rej)
  );
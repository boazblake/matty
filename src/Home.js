import m from "mithril";
import Location from './Location.js'
import Forecast from './Forecast.js'
import Chart from './Chart.js'
import { animateFadeIn } from "./services/animations.js";

const Home = ({ attrs: { Models } }) => {
  const onSuccess = Models => data => {
    Models.Data = data;
    setTimeout(() => load(({ attrs: { Models } })), 30000)
  }
  const onError = Models => data => Models.Errors = data


  const load = ({ attrs: { Models } }) =>
    Models.GetCurrentWeather(Models.Location)
    .chain(_ => Models.GetForcastWeatherTask(Models.Location)(Models.ForcastDays))
      .fork( onError(Models), onSuccess(Models))
 
  return {
    oninit: load,
    oncreate: animateFadeIn,
    view: ({attrs:{Models}}) =>    
     m(".container box",
        (Models.Data)
          ? [
              m(Location, { location: Models.Data.location, current: Models.Data.current , icon: Models.Data.current.condition.icon}),
              m(Forecast, { forecast: Models.Data.forecast}),
              m(Chart, {Models, forecast: Models.Data.forecast })
            ]
          : m('h1', 'Loading')
      ) }
 
};

export default Home;

import m from "mithril";
import Location from '../Location/component.js'
import Current from '../Current/component.js'
import Forecast from '../Forecast/component.js'
import { animateFadeIn } from "../services/animations.js";

const Home = () => {
  const onSuccess = Models => data => Models.Data = data
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
              m(Location, { location: Models.Data.location, icon: Models.Data.current.condition.icon }),
              m(Current, { current: Models.Data.current }),
              m(Forecast, { forecast: Models.Data.forecast}),
            ]
          : m('h1', 'Loading')
      ) }
 
};

export default Home;

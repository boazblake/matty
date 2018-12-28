
import m from "mithril";
import { animateFadeIn } from "../services/animations.js";

const Forecast = ({ attrs: { forecast: { forecastday}}}) => {
    console.log('forcast', forecastday)
     
    return {
        oncreate: animateFadeIn,
        view: () => [
            m("h2.h2", 'forecast'),
            m('.columns', forecastday.map(({ date, astro:{sunrise}, day: { condition: { icon }, avgtemp_c, avgtemp_f, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, maxwind_mph, maxwind_kph, totalprecip_in } }) => 
                m('.column', [
                    m('img', { src: `http:${icon}` }),
                    m('.',  date),
                    m('.', 'sunrise: ', sunrise),
                    m('.', 'avgtemp_c: ', avgtemp_c),
                    m('.', 'avgtemp_f: ', avgtemp_f),
                    m('.', 'maxtemp_c: ', maxtemp_c),
                    m('.', 'maxtemp_f: ', maxtemp_f),
                    m('.', 'mintemp_c: ', mintemp_c),
                    m('.', 'mintemp_f: ', mintemp_f),
                    m('.', 'maxwind_mph: ', maxwind_mph),
                    m('.', 'maxwind_kph: ', maxwind_kph),
                    m('.', 'totalprecip_in: ', totalprecip_in),
                ] )))
        ]
    }
};

export default Forecast;

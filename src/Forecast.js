
import m from "mithril";
import { animateFadeIn } from "./services/animations.js";

const Forecast = ({ attrs: { forecast: { forecastday}}}) => {
    return {
        oncreate: animateFadeIn,
        view: () => [
            m('.columns', 
            forecastday.map(({ date, astro:{sunrise},
                               day: { condition: { icon }, 
                               avgtemp_c, maxtemp_c,  mintemp_c,
                                totalprecip_in } }) => 
                m('.column', [
                    m('img', { src: `http:${icon}` }),
                    m('.',  date),
                    m('.', 'sun rise: ', sunrise),
                    m('.', 'max temp(c): ', maxtemp_c),
                    m('.', 'avg temp(c): ', avgtemp_c),
                    m('.', 'min temp(c): ', mintemp_c),
                    m('.', 'total precip(in): ', totalprecip_in),
                ] )))
        ]
    }
};

export default Forecast;

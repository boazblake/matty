
import m from "mithril";
import { animateFadeIn } from "../services/animations.js";

const Location = ({ attrs:{ current: { wind_mph, wind_kph, wind_degree, wind_dir, humidity }}}) => {
     
    return {
        oncreate: animateFadeIn,
        view: () => [
            m("h2.h2", 'Current Wind'),
            JSON.stringify({wind_mph, wind_kph, wind_degree, wind_dir, humidity}, null, 2) ,
        ] 
    }
};

export default Location;

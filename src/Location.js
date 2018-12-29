
import m from "mithril";
import { animateFadeIn } from "./services/animations.js";

const Location = ({ attrs: { icon, location: { name, region, country, localtime }, current: { wind_mph, wind_kph, wind_degree, wind_dir, humidity } }}) => {
    return {
        oncreate: animateFadeIn,
        view:({ attrs: { icon, location: { name, region, country, localtime }, current: { wind_mph, wind_kph, wind_degree, wind_dir, humidity } }}) => m(".level", { style: { 'background': '#ecf0f1'}},
        [
            m('.level-left',[
                m('.level-item', name),
                m('.level-item', region), 
                m('.level-item', country), 
            ]),
            m('level-right', [
                m('span.level-item',[
                    m('', [
                        m('p.p', `${wind_dir} - ${wind_mph} MPH`),
                        m('i.i', { class: 'fas fa-arrow-alt-circle-up', style: { transform: `rotate(${wind_degree}deg)` } }),
                        m('i.i', { class: 'fas fa-tint', style: { 'margin-left': '20%', color: '#3498db', transform:`scale(${humidity/50})`} }),
                        m('p.p',`Humidity: ${humidity}`)
                    ]),
                     m('img', { src: `http:${icon}` }), 
                     m('.pre',localtime.split(' ').map(date => m('p.p',`${date}`)))
                ]), 
            ]),
        ]),
    }
};

export default Location;

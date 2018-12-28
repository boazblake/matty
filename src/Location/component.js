
import m from "mithril";
import { animateFadeIn } from "../services/animations.js";

const Location = ({attrs:{ icon, location: {name,region ,country ,localtime} }}) => {
     
    return {
        oncreate: animateFadeIn,
        view: () => m(".level", 
        [
            m('.level-left',[
                m('.level-item', name),
                m('.level-item', region), 
                m('.level-item', country), 
            ]),
            m('level-right', [
                m('span.level-item',[
                     m('img', { src: `http:${icon}` }), 
                     localtime
                ]), 
            ]),
        ]),
    }
};

export default Location;

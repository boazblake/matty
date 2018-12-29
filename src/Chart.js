
import m from "mithril";
import { animateFadeIn } from "./services/animations.js";
import {prop, pluck, zip} from 'ramda'


const Chart = ({ attrs: { Models, forecast: { forecastday } } }) => {

    const makeChart = ({dom}) => {
        let data = forecastday.flatMap(({ day, date }) => 
            [{
                date,
                temp: prop('avgtemp_c', day),
                tempCategory:'avgTemp',
            },
            {
                date,
                temp: prop('mintemp_c', day),
                tempCategory: 'minTemp',
            },
            {
                date,
                temp: prop('maxtemp_c', day),
                tempCategory: 'maxTemp',
            }]
        )
        Models.Chart = new dimple.chart(dimple.newSvg(dom, 800, 500), data);
        Models.Chart.addCategoryAxis("x", "date");
        Models.Chart.addMeasureAxis("y", "temp");
        Models.Chart.addSeries('tempCategory', dimple.plot.line);
        Models.Chart.interpolation = 'cardinal'
        Models.Chart.draw();
    }

    return {
        oncreate:makeChart,
        view: () => [
            m('.', {id:'temp-chart'})
        ]
        
    }
};

export default Chart;

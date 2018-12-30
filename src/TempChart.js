
import m from "mithril";
import { animateFadeIn } from "./services/animations.js";
import {prop, pluck, zip} from 'ramda'
import Chart from 'chart.js'


const TempChart = ({ attrs: { Models, forecast: { forecastday } } }) => {

    const makeChart = ({dom, attrs: {Models}}) => {
        Models.ChartData = forecastday.reduce((datasets, { date, day: { avgtemp_c, maxtemp_c, mintemp_c, totalprecip_in} }) => {
            datasets[0].data.push(mintemp_c)
            datasets[0].x = date
            datasets[1].data.push(avgtemp_c)
            datasets[1].x = date
            datasets[2].data.push(maxtemp_c)
            datasets[2].x = date
            datasets[3].data.push(totalprecip_in)
            datasets[3].x = date
            return datasets
        }, datasets)

        console.log(Models.ChartData)

        Models.Chart = new Chart(dom, {type:'line', data:Models.ChartData})
        console.log(Models.Chart)
    }

    return {
        oncreate:makeChart,
        view: () => [
            m('canvas.canvas', {id:'temp-chart'})
        ]
        
    }
};

export default TempChart;

const datasets =
    [{
        label: 'minTemp',
        data: [],
        type: 'line',
        x: null
    },
    {
        label: 'avgTemp',
        data: [],
        type: 'line',
        x: null
    },
    {
        label: 'maxTemp',
        data: [],
        type: 'line',
        x: null
    },
    {
        label: 'precip',
        data: [],
        type: 'bar',
        x: null
    }
    ]
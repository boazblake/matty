import m from "mithril";
import { log } from "../services/index.js";
import Models from "../Models.js";
import { set, lensProp } from "ramda";
import { animateFadeIn } from "../services/animations.js";

const Home = () => {
 
  const onError = error => {
    log("error")(error);
    Models.Errors.push(error);
  };

  const onSuccess = data => { Models.data = data; console.log(data)};

  const getData = () =>
    Models.getWeather()
      .chain(toTemp)
      .chain(updateChrono)
      .fork(onError, onSuccess);

  return {
    oninit: getData,
    oncreate: animateFadeIn,
    view: () =>
      m(".container box", [
        m("h1.title", "Dark Sky"),
        m(
          "pre.pre",
          `Last Data Point: ${JSON.stringify(Models.Data, null, 2)}`
        ),
      ]),
  };
};

export default Drone;

import m from "mithril";
import Layout from "./layout/component.js";
import Home from "./Home/component.js";

const routes = Models => ({
  "/home": {
    view: () => m(Layout, m(Home, Models)),
  },
});


// const getLocation = ({ attrs: model }) => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       Models.Location.lat = position.coords.latitude
//       Models.Location.lon = position.coords.latitude
//     })
//   } 
// }

export const App = ({ attrs: Models }) => {
  return {
    oncreate: ({ dom }) => {
      const main = dom.querySelector(".section-main");
      m.route(main, "/home", routes(Models));
    },
    view: ({ children }) => {
      return m(".App", [m(".section-main", children)]);
    },
  };
};

export default App;

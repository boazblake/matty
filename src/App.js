import m from "mithril";
import Layout from "./layout/component.js";
import Models from "./Models.js";
import Home from "./Home/component.js";

const routes = {
  "/home": {
    view: () => m(Layout, m(Home)),
  },
};

export const App = ({ attrs: model }) => {
  return {
    oncreate: ({ dom }) => {
      const main = dom.querySelector(".section-main");
      m.route(main, "/home", routes);
    },
    view: ({ children }) => {
      return m(".App", [m(".section-main", children)]);
    },
  };
};

export default App;

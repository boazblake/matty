import m from "mithril";
import Layout from "./Layout.js";
import Home from "./Home.js";

const routes = Models => ({
  "/home": {
    view: () => m(Layout, m(Home, Models)),
  },
});

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

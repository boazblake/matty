import m from "mithril";
import Toolbar from "../Toolbar/component.js";

const Layout = {
  view: ({ children }) => {
    return [m(".title"), "WEATHER APP", children];
  },
};

export default Layout;

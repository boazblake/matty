import m from "mithril";

const Layout = {
  view: ({ children }) => {
    return [m(".title"), "WEATHER APP", children];
  },
};

export default Layout;

import m from 'mithril'
import NavBar from './NavBar.js'

const Layout = {
	view: ({ children }) => {
		return [ m(NavBar), children ]
	},
}

export default Layout

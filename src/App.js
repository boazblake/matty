import m from 'mithril'
import Layout from './Layout.js'
import Home from './pages/Home.js'
import Splash from './assets/splash/component.js'
import Maintenance from './pages/Maintenance.js'
import About from './pages/About.js'
import Products from './pages/Products.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'

const routes = (main, Models) => ({
	'/home': {
		onmatch: () => {
			// Show Loader until the promise has been resolved or rejected.
			m.render(main, m(Layout, m(Splash)))

			return new Promise((resolve /*, reject*/) => {
				//Fetch all necessary data here
				setTimeout(function() {
					resolve()
				}, 2000)
			}).catch(
				(/* e */) => {
					// In case of server error we can show the maintenance page.
					return Maintenance
				}
			)
		},

		render: () => m(Layout, m(Home, Models)),
	},
	'/about': {
		render: () => m(Layout, m(About, Models)),
	},
	'/products': {
		render: () => m(Layout, m(Products, Models)),
	},

	'/customers/login': {
		render: () => m(Layout, m(Login, Models)),
	},
	'/customers/register': {
		render: () => m(Layout, m(Register, Models)),
	},
})

export const App = ({ attrs: Models }) => {
	return {
		oncreate: ({ dom }) => {
			const main = dom.querySelector('.section-main')
			m.route(main, '/home', routes(main, Models))
		},
		view: ({ children }) => {
			return m('.App', [ m('.section-main', children) ])
		},
	}
}

export default App

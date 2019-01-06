import m from 'mithril'
import Layout from './Layout.js'
import Home from './Home.js'
import Splash from './assets/splash/component.js'
import MaintenancePage from './MaintenancePage.js'

const routes = (main, Models) => ({
	'/home': {
		onmatch() {
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
					return MaintenancePage
				}
			)
		},

		render: () => m(Layout, m(Home, Models)),
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

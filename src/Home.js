import m from 'mithril'
import wine from './assets/wine'
import champagne from './assets/champagne'
import Heading from './assets/heading.js'

const Home = (vnode) => {
	const state = { champagne: false }

	setTimeout(() => {
		state.champagne = true
		m.redraw()
	}, 3000)

	return {
		view: (vnode) => [ m('.container', [ m(wine), state.champagne ? m(champagne) : '', Heading ]) ],
	}
}
export default Home

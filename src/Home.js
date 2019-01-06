import m from 'mithril'

import Loader from './services/loader.js'

const Home = (vnode) => {
	console.log('component created?? HOME', vnode)
	const state = { data: false }

	const load = (vnode) => {
		setTimeout(() => {
			state.data = true
			console.log('load', state)
			m.redraw()
		}, 100000)
	}

	return {
		oninit: load,
		view: (vnode) => {
			console.log(state)
			return m('.container box', state.data ? [ m('h1', 'loaded') ] : [ m(Loader) ])
		},
	}
}

export default Home

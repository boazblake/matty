import m from 'mithril'

const animate = ({ dom }) => {
	let children = [ ...dom.children ]
	children.map((child, index) => {
		child.style.opacity = 0
		child.style.transition = 'opacity .2s ease-in-out'

		return setTimeout(() => {
			child.style.opacity = 1
		}, (index + 1) * 150)
	})
}

const wine = {
	oncreate: animate,
	view: () =>
		m('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-54 0 512 512', width: '512px' }, [
			m('path', { d: 'm396.300781 242-81.300781 30-81.300781-30 8.101562-60h146.398438zm0 0', fill: '#deecf1' }),
			m('path', { d: 'm396.300781 242-81.300781 30v-90h73.199219zm0 0', fill: '#c6e2e7' }),
			m('path', { d: 'm300 377h30v120h-30zm0 0', fill: '#c6e2e7' }),
			m('path', { d: 'm315 377h15v120h-15zm0 0', fill: '#a8d3d8' }),
			m('path', { d: 'm240 482h150v30h-150zm0 0', fill: '#deecf1' }),
			m('path', { d: 'm315 482h75v30h-75zm0 0', fill: '#c6e2e7' }),
			m('path', {
				d:
					'm315 392c-56.101562 0-98.101562-51.300781-87-106.199219l5.699219-43.800781h162.601562l6 44.699219c10.5 53.101562-30.601562 105.300781-87.300781 105.300781zm0 0',
				fill: '#cf5668',
			}),
			m('path', {
				d: 'm315 392v-150h81.300781l6 44.699219c10.5 53.101562-30.601562 105.300781-87.300781 105.300781zm0 0',
				fill: '#c83c50',
			}),
			m('path', { d: 'm60 0v152h90v-152zm0 0', fill: '#5a5a5a' }),
			m('path', { d: 'm105 0h45v152h-45zm0 0', fill: '#444' }),
			m('path', {
				d:
					'm210 234.199219v277.800781h-210v-60l30-30v-150l-30-30v-7.800781c0-60.300781 41.699219-89.398438 60-112.199219h90c18.300781 22.800781 60 51.898438 60 112.199219zm0 0',
				fill: '#b03244',
			}),
			m('path', {
				d: 'm210 234.199219v277.800781h-105v-390h45c18.300781 22.800781 60 51.898438 60 112.199219zm0 0',
				fill: '#962a3a',
			}),
			m('path', { d: 'm150 362v90h-150v-90l75-30zm0 0', fill: '#c6e2e7' }),
			m('path', { d: 'm150 362v90h-45v-108zm0 0', fill: '#a8d3d8' }),
			m('path', { d: 'm0 242h150v120h-150zm0 0', fill: '#deecf1' }),
			m('path', { d: 'm105 242h45v120h-45zm0 0', fill: '#c6e2e7' }),
		]),
}

export default wine

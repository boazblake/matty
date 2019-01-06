import m from 'mithril'

const animate = ({ dom }) =>
	dom.animate([ { width: 0 }, { width: '100%' } ], {
		duration: 2850,
	})

const Heading = (vnode) => {
	const title = 'Mattys Wine Bar'

	return {
		oncreate: animate,
		view: () =>
			m(
				'h1.h1',
				{
					id: 'heading',
					style: { overflow: 'hidden', color: 'white', 'font-size': '7em' },
				},
				title
			),
	}
}

export default m(Heading)

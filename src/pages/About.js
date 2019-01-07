import m from 'mithril'

const About = (vnode) => {
	return {
		view: () =>
			m(
				'section.section',
				{
					style: {
						position: 'fixed',
						top: '0',
						right: '0',
						bottom: '0',
						left: '0',
						overflow: 'hidden',
					},
				},
				[
					m('h1.h1', { style: { 'font-size': '8rem', color: 'white' } }, 'About Us'),
					m(
						'h3.h3',
						{ style: { 'font-size': '2rem', color: 'white' } },
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					),
					m(
						'video',
						{
							style: {
								position: 'absolute',
								top: '5%',
								left: 0,
								width: '100%',
								height: '100%',
								'z-index': '-100',
							},
							playsinline: true,
							autoplay: true,
							muted: true,
							loop: true,
						},
						[ m('source', { src: 'http://thenewcode.com/assets/videos/aotearoa.mp4', type: 'video/webm' }) ]
					),
				]
			),
	}
}

export default About

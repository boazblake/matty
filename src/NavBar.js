import m from 'mithril'

const fadeIn = ({ dom }) =>
	dom.animate(
		[
			{
				opacity: 0,
			},
			{
				opacity: 1,
			},
		],
		{
			duration: 1850,
		}
	)

const NavBar = () => {
	const hideBurgerStyle = {
		'background-color': 'white',
	}
	const showBurgerStyle = {
		'background-color': '#003863',
	}

	const hideNavStyle = {
		'z-index': 100,
		'background-color': 'transparent',
	}

	const showNavStyle = {
		'z-index': 100,
		'background-color': '#ecf0f1',
	}

	const state = {
		showNav: false,
		navStyle: hideNavStyle,
		burgerStyle: hideBurgerStyle,
	}

	const hideNav = () => {}

	const showNavBar = (e) => {
		state.showNav = !state.showNav

		if (state.showNav) {
			console.log(state.navStyle)
			state.navStyle = showNavStyle
			state.burgerStyle = showBurgerStyle
			console.log(state.navStyle)
		} else {
			state.navStyle = hideNavStyle
			state.burgerStyle = hideBurgerStyle
		}

		m.redraw()
	}

	return {
		view: () =>
			m(
				'nav.navbar',
				{
					style: state.navStyle,
					role: 'navigation',
					'aria-label': 'main navigation',
				},
				[
					m('.navbar-brand', [
						m('a.navbar-item', { oncreate: m.route.link, href: '#' }, [
							m('img', {
								src: 'https://loading.io/patterns/bubble/lg.boiling-water-texture.png',
								width: '112px',
								height: '28px',
							}),
						]),
						m(
							`a.navbar-burger burger ${state.showNav ? 'is-active' : ''}`,
							{
								role: 'button',
								'aria-label': 'menu',
								onclick: showNavBar,
							},
							[
								m('span', { style: state.burgerStyle, 'aria-hidden': 'true' }),
								m('span', { style: state.burgerStyle, 'aria-hidden': 'true' }),
								m('span', { style: state.burgerStyle, 'aria-hidden': 'true' }),
							]
						),
					]),
					state.showNav &&
						m(
							'',
							{
								oncreate: fadeIn,
								style: {
									'background-color': '#ecf0f1',
									height: '100vh',
									'z-index': 100,
								},
							},
							'NAVIGATION',
							[
								m('ul', [
									m(
										'a[href=/]',
										{
											style: { display: 'block', 'font-size': '10rem' },
											oncreate: m.route.link,
											href: 'about',
											onclick: () => {
												showNavBar()
											},
										},
										'About'
									),
									m(
										'a[href=/]',
										{
											style: { display: 'block', 'font-size': '10rem' },
											oncreate: m.route.link,
											href: 'home',
											onclick: () => {
												showNavBar()
											},
										},
										'Home'
									),
								]),
							]
						),
				]
			),
	}
}

export default NavBar

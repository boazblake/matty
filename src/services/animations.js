export const animateEntrance = ({ dom }) =>
	dom.animate([ { transform: 'translateX(250)', opacity: 0 }, { transform: '', opacity: 1 } ], {
		duration: 850,
	})

export const animateChildrenEntrance = ({ dom }) => {
	let children = [ ...dom.children ]

	return children.map((child, index) => {
		setTimeout(() => {
			child.animate([ { transform: 'translate3d(0,-10%,0)', opacity: 0 }, { transform: 'none', opacity: 1 } ], {
				duration: 900,
			})
		}, (index + 1) * 200)
	})
}

export const animateExit = (dom) => {
	let anim = animate([ { transform: 'none', opacity: 1 }, { transform: 'translate3d(25%,100%,0)', opacity: 0 } ])

	let waapi = dom.animate(anim, {
		duration: 850,
	})

	return new Promise((resolve) => {
		waapi.onfinish = function(e) {
			resolve()
		}
	})
}

export const animateChildrenExit = (dom) => {
	let children = [ ...dom.children ]

	let anim = animate([ { transform: 'none', opacity: 1 }, { transform: 'translate3d(25%,100%,0)', opacity: 0 } ])

	let waapi = children.map((child) =>
		child.animate(anim, {
			duration: 850,
		})
	)

	return new Promise((resolve) => {
		waapi.onfinish = function(e) {
			resolve()
		}
	})
}

export const animateFadeIn = ({ dom }) => {
	dom.style.opacity = 0
	dom.style.transition = 'opacity .4s ease-in-out'

	return setTimeout(() => {
		dom.style.opacity = 1
	})
}

export const animateChildrenFadeIn = ({ dom }) => {
	let children = [ ...dom.children ]
	children.map((child, index) => {
		child.style.opacity = 0
		child.style.transition = 'opacity .2s ease-in-out'

		return setTimeout(() => {
			child.style.opacity = 1
		}, (index + 1) * 150)
	})
}

export const animateFadeOut = ({ dom }) => {
	let anim = [
		{ transition: 'opacity .4s ease-in-out' },
		{ transform: 'none', opacity: 1 },
		{ transform: 'translate3d(25%,100%,0)', opacity: 0 },
	]
	let waapi = dom.animate(anim, {
		duration: 850,
	})

	return new Promise((resolve) => {
		waapi.onfinish = function(e) {
			resolve()
		}
	})
}

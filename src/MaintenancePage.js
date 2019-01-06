import m from 'mithril'

const MaintenancePage = (vnode) => {
	const state = {}

	return {
		view: (vnode) => {
			return [ m('.container box', 'MaintenancePage') ]
		},
	}
}

export default MaintenancePage

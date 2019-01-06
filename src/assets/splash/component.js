import './styles.scss'
import m from 'mithril'

export default {
	view(/*vnode*/) {
		return m('.holder', [ m('.preloader', [ m('div'), m('div'), m('div'), m('div'), m('div'), m('div'), m('div') ]) ])
	},
}

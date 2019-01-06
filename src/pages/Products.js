import m from 'mithril'

import { loadProducts } from '../services/requests.js'

const Products = (vnode) => {
	const state = { data: [] }
	const onSuccess = (state) => (data) => {
		console.log('succ', data)
		state.data = data
	}
	const onError = (state) => (data) => {
		console.log('errr', data)
		state.data = data
	}

	return {
		oninit: loadProducts().fork(onError(state), onSuccess(state)),
		view: () =>
			m('section.section ', [
				m('h1.h1 title', 'PRODUCTS'),
				m('section.tile is-ancestor is-verticle ', { style: { 'flex-wrap': 'wrap' } }, [
					state.data.map((p, idx) =>
						m('. tile is-parent', { style: { 'min-width': '350px' }, key: idx }, [
							m('article.tile is-child box', [ m('p.title', p.name), m('p.subtitle', p.email) ]),
						])
					),
				]),
			]),
	}
}

export default Products

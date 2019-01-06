import m from 'mithril'
import Task from 'data.task'

const baseUrl = `https://jsonplaceholder.typicode.com`

export const loadProducts = () =>
	new Task((rej, res) =>
		m
			.request({
				method: 'GET',
				url: `${baseUrl}/users`,
				withCredentials: false,
				headers: { 'Content-Type': 'application/json' },
			})
			.then(res, rej)
	)

// index.jsx

import m from 'mithril'
const root = document.getElementById('app')

// Styles
import 'bulma/css/bulma.css'
import './normalize.css'
import './index.css'

import App from './App.js'

m.render(root, m(App))

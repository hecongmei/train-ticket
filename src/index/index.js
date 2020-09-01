import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import axios from 'axios'

import 'normalize.css/normalize.css'
import './index.css'
import '../assets/iconfont/iconfont.css'
import App from './App.jsx'

React.$axios = axios

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))


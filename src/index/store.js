import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'

// createStore第二个参数传染病默认数据
export default createStore(
  combineReducers(reducers),
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    highSpeed: false,
    // departDate: ''
  },
  applyMiddleware(thunk)
)

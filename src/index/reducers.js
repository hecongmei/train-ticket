import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_HIGH_SPEED,
  ACTION_SET_IS_DEPART_DATE
} from './actions'


export default {
  from (state = '北京', action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_FROM:
        return payload;
      default:
    }
  },
  to (state = '上海', action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TO:
        return payload;
      default:
    }
  },
  isCitySelectorVisible (state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload;
      default:
    }
  },
  currentSelectingLeftCity (state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
        return payload;
      default:
    }
  },
  cityData (state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload;
      default:
    }
  },
  isLoadingCityData (state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return payload;
      default:
    }
  },
  isDateSelectorVisible (state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
        return payload;
      default:
    }
  },
  highSpeed (state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_HIGH_SPEED:
        return payload;
      default:
    }
  },
  departDate(state,action){
    const {type,payload} =action
    switch(type){
      case ACTION_SET_IS_DEPART_DATE:
        return payload;
        default: 
    }
  }
}
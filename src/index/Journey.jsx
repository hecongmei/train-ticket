import React, { Component } from 'react'
import './Journey.css'

function Journey(props) {
  const { from, to, exchangeFromTo, showCitySelector } = props

  return (
    <div className="journey">
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
          onClick={() => showCitySelector(true)}
        />
      </div>
      <div className="journey-switch">
        <i className="iconfont icon-jiantou_zuoyouqiehuan"></i>
      </div>
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
          onClick={() => showCitySelector(false)}
        />
      </div>
    </div>
  )
}

export default Journey

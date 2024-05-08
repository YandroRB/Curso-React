import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({lang,img,fcolor,scolor}) => {
  return (
    <div className="container">
      <div className="card">
        <style>
        </style>
        <div style={{backgroundImage: `url(${img})`}} className="front"></div>
        <div className="back">
          <h3>{lang}</h3>
        </div>
      </div>
    </div>
  )
  Card.PropTypes={
    lang:PropTypes.string,
    img:PropTypes.string,
    fcolor:PropTypes.string,
    scolor:PropTypes.string

  }

}

export default Card
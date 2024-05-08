import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

function Button ({click,tecla,notName=false,altName}) {
  const nombrar = ()=>{if(!notName) return (altName||tecla)}

  return (
    <button onClick={(e)=>click(e.target.name)} name={nombrar()}>{tecla}</button>
  )
}

Button.propTypes = {
    tecla:PropTypes.string,
    notName:PropTypes.bool,
    altName:PropTypes.string,
    click:PropTypes.func
}

export default Button
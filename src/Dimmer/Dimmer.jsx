import React, { Component } from 'react'
import cNames from 'classnames'

const Dimmer = (props) => {
  return (
    <div {...props} className={cNames([ 'dimmer', props.className ])}>
      {props.children}
    </div>
  )
}

export default Dimmer

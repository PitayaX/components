import React, { Component, PropTypes } from 'react'
import TimeoutTransitionGroup from './TimeoutTransitionGroup'

export default class Animate extends Component {

  static propTypes = {
    enterTimeout: PropTypes.number,
    leaveTimeout: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    enterTimeout: 500,
    leaveTimeout: 500,
    name: 'animate'
  }

  render () {
    return (
      <TimeoutTransitionGroup
        enterTimeout={this.props.enterTimeout}
        leaveTimeout={this.props.leaveTimeout}
        transitionName={this.props.name}>
        {this.props.children}
      </TimeoutTransitionGroup>
    )
  }
}

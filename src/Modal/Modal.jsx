import React, { Component, PropTypes as T } from 'react'
import { Portal } from 'react-overlays'
import cNames from 'classnames'
import Animate from '../Animate/Animate'

export default class Modal extends Component {

  static propTypes = {
    isShowed: T.bool.isRequired,
    dimmerClassName: T.string,
    modalClassName: T.string,
    animateName: T.string,
    transitionTimeout: T.number,
    enterTimeout: T.number,
    leaveTimeout: T.number,
    children: T.any
  }

  render () {
    if (this._needTransition()) {
      const enterTimeout = this.props.enterTimeout || this.props.transitionTimeout
      const leaveTimeout = this.props.leaveTimeout || this.props.transitionTimeout
      const animateName = this.props.animateName

      return (
        <Portal>
          <Animate enterTimeout={enterTimeout} leaveTimeout={leaveTimeout} name={animateName}>
            {this.props.isShowed ? this._getModal() : null}
          </Animate>
        </Portal>
      )
    }
    else {
      return this.props.isShowed ? <Portal>{this._getModal()}</Portal> : null
    }
  }

  _getModal () {
    return (
      <div className={this.props.dimmerClassName}>
        <div className={this.props.modalClassName}>
          {this.props.children}
        </div>
      </div>
    )
  }

  _needTransition () {
    // return !!(this.props.transitionTimeout || this.props.enterTimeout || this.props.leaveTimeout)
    return !!this.props.animateName
  }
}

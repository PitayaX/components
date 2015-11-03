import React, { Component, PropTypes as T } from 'react'
import { newScript, loadAllScript } from '../utils'

const noop = () => {}
let vendorLoaded  = false

class Editor extends Component {

  static propTypes = {
    onLoad: T.func,
    onError: T.func
  }

  static defaultProps = {
    onLoad: noop,
    onError: noop
  }

  get value () {
    // return this.refs.editor.value
    // return this.$editor && this.$editor.getContent()
    // return this._value
    this.refs.editor.value
  }

  componentDidMount () {
    if (!vendorLoaded) this.loadVendorScript(this.configEditor)
    else {
      this.initEditor()
    }
  }

  render () {
    return (
      <textarea ref='editor' name="content" data-provide="markdown" rows="10"></textarea>
    )
  }

  initEditor () {
    this.$editor = window.jQuery(this.refs.editor)

    if (vendorLoaded && this.$editor != null) {
      if (this.$editor.data('markdown')) {
        this.$editor.data('markdown').showEditor()
        return
      }

      this.configEditor()
    }
  }

  loadVendorScript (callback) {
    loadAllScript([
      newScript(
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'
      ),
      newScript(
        'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js'
      )
    ], () => {
      newScript('/assets/bootstrap-markdown.js', () => {
        vendorLoaded = true
        this.$editor = window.jQuery(this.refs.editor)
        callback.bind(this)()
      })
    }, (isSucceed) => {
      if (!isSucceed) this.props.onError()
    })
  }

  configEditor () {
    const { props } = this
    this.$editor.markdown({
      onShow: props.onLoad,
      onChange (e) {
        // this._value = e.getContent()
      }
    })
  }
}

export default Editor

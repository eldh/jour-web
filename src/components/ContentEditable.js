/* eslint-disable react/prop-types */
import React from 'react'

export default class ContentEditable extends React.Component {
  shouldComponentUpdate(nextProps) {
    // We need not rerender if the change of props simply reflects the user's
    // edits. Rerendering in this case would make the cursor/caret jump.
    return (
      // Rerender if there is no element yet... (somehow?)
      !this.el ||
      // ...or if html really changed... (programmatically, not by user edit)
      (nextProps.value !== this.el.innerText &&
        nextProps.value !== this.props.value) ||
      // ...or if editing is enabled or disabled.
      this.props.disabled !== nextProps.disabled
    )
  }

  componentDidUpdate() {
    if (this.el && this.props.value !== this.el.innerText) {
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      this.el.innerText = this.props.value
    }
  }

  emitChange = (e) => {
    if (!this.el) { return }
    const html = this.el.innerText
    if (this.props.onChange && html !== this.lastHtml) {
      e.target = {value: html}
      this.props.onChange(e)
    }
    this.lastHtml = html
  }

  render() {
    const {tagName, value, onChange, ...rest} = this.props // eslint-disable-line no-unused-vars

    return React.createElement(
      tagName || 'div',
      {
        ...rest,
        ref: (e) => { this.el = e },
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {__html: value},
      },
      this.props.children)
  }
}

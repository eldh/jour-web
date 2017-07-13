import {PropTypes, Component, createElement as h} from 'react'
import Textarea from './Textarea.js'

export default class PostComposer extends Component {
  static propTypes = {
    post: PropTypes.object,
    updatePost: PropTypes.func.isRequired,
  }

  render() {
    const {updatePost, post} = this.props
    return h(Textarea, {
      value: post.value,
      onChange: (e) => updatePost({...post, value: e.target.value}),
      placeholder: post.status && 'What happened today?',
    })
  }
}

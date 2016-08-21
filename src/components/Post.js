import {Component, PropTypes, createElement as h} from 'react'
import {space} from '../styleConstants'
import PostComposer from './PostComposer'
import PostHeading from './PostHeading'
import ContentContainer from './ContentContainer'
import SaveIndicator from './SaveIndicator'
// import SignInButton from './SignInButton'

class Post extends Component {
  render() {
    return this.props.user.status !== 'NOT_LOGGED_IN' ?
      h(ContentContainer, {styles: {margin: `${space}px auto`}},
        // h(SignInButton, this.props),
        h(PostHeading, this.props),
        h(PostComposer, this.props),
        h(SaveIndicator, this.props)
      ) : null
  }
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Post

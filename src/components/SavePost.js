import {createElement as h} from 'react'
import Button from './Button'
import {halfSpace} from '../styleConstants'

const SavePost = ({post, savePost}) =>
  h(Button,
    {
      onClick: () => {
        savePost(post)
      },
      styles: {
        transition: 'all 0.2s ease-in-out',
        disabled: !post.value.length,
        opacity: Math.min(post.value.length / 10, 1),
        marginTop: halfSpace,
        alignSelf: 'center',
      },
    },
    'Done'
  )

SavePost.displayName = 'SavePost'
export default SavePost

import PostsList from './postsList'
import Post from './post'
import { useParams } from 'react-router-dom'

const Posts = () => {
  const params = useParams()
  const posts = [
    { id: 1, label: 'post1' },
    { id: 2, label: 'post2' },
    { id: 3, label: 'post3' },
  ]
  const { postId } = params

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  )
}

export default Posts

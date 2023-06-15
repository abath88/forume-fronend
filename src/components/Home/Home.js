import Panel from '../Panel/Panel';
import Post from '../Post/Post';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/slice/postSlice';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const posts = useSelector((state) => {return state.posts.posts})
  const isLoading = useSelector((state) => state.posts.isLoading)
  const error = useSelector((state) => state.posts.error)

  if (isLoading) {
    console.log(posts);
    return 'loading...'
  }

  if (error) {
    return error
  }

  return (
    <>
      {posts.map((post, key) => (
        <Panel key={key}>
          <Post 
            id={post._id}
            title={post.title}
            votes={34} 
            author={post._creator.username} 
            date={post.createdAt}
            commentAmount={post._comments.length}
          >
            {post.text}
          </Post>
        </Panel>
      ))}
    </>
  )
}

export default Home;
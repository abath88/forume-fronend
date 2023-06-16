import styles from './Vote.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { upvoteComment, downvoteComment, upvotePost, downvotePost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';


const Vote = ({ element }) => {
  const [userId, setUserId] = useState('');
  const [post, setPost] = useState(true);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.posts.isLoading)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    setUserId(localStorage.getItem('UserID'));
    if(element.hasOwnProperty('title')) setPost(true)
    else {setPost(false)}
  },[setUserId, setPost, element]);

  const handleUpvote = (e) => {
    if(post) dispatch(upvotePost({id: element._id}))
    else dispatch(upvoteComment({id: element._id}))
  }
  const handleDownvote = (e) => {
    if(post) dispatch(downvotePost({id: element._id}))
    else dispatch(downvoteComment({id: element._id}))
  }

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }

  return (
    <div className={styles.vote}>
     <button onClick={handleUpvote} style={{color: `${element.vote.positive.includes(userId) && 'green'}`}} className={styles.vote__button}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <div className={styles.vote__amount}>{element.vote.positive.length - element.vote.negative.length}</div>
      <button onClick={handleDownvote}  style={{color: `${element.vote.negative.includes(userId) && 'red'}`}} className={styles.vote__button}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  )
};

export default Vote;

import { useEffect, useCallback, useState } from 'react';
import styles from './PostWithComments.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOnePost } from '../../redux/slice/postSlice';
import Panel from '../Panel/Panel';
import Vote from '../Vote/Vote';
import AddComment from '../AddComment/AddComment';
import avatar from '../../avatar-default.gif';

const PostWithComments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    dispatch(fetchOnePost({id}))
  }, [dispatch, id])
  const post = useSelector((state) => {return state.posts.post})

  return (
    <Panel>
      { post && 
      <>
        <Vote />
        <div className={styles.post}>
          <h1 className={styles.post__title}>{ post.title }</h1>
          <p className={styles.post__text}>{post.text}</p>
          <div className={styles.buttons}>
            <button className={styles.post__reply} onClick={ () => setShowReply(prev => !prev)}>reply</button>
            {showReply && <AddComment id={id}/>}
          </div>
          {post._comments.map( (comment, key) => 
            <div key={key} className={styles.comment}>
              <div className={styles.comment__votes}>
                <div>
                  <img src={avatar} alt="Avatar" className={styles.comment__avatar} />
                </div>
                <Vote />
              </div>
              <div className={styles.comment__content}>
                <p className={styles.comment__author}>{comment._creator.username}</p>
                <div className={styles.comment__date}>{comment.date}</div>
                <p className={styles.comment__text}>{comment.text}</p>
              </div>
            </div>
          )}
        </div>
      </>
      }
    </Panel>
  )
}

export default PostWithComments;
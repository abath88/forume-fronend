import styles from './Post.module.scss';
import Vote from '../Vote/Vote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import avatar from '../../avatar-default.gif';
import { Link } from 'react-router-dom';

const Post = ({ title, children, author, date, commentAmount, id }) => {
  return(
    <>
      <Vote />
      <div className={styles.post}>
        <Link to={`post/${id}`}><h1 className={styles.post__title}>{ title }</h1></Link>
        <p className={styles.post__text}>{children}</p>
        <div className={styles.post__information}>
          <div className={styles.post__generalInformation}>
            <div>
              <img src={avatar} alt="Avatar" className={styles.post__avatar} />
            </div>
            <div className={styles.post__author}>Posted by <span style={{color:'#475DE8', cursor: "pointer"}}>{author}</span></div>
            <div className={styles.post__date}>{date}</div>
          </div>
          <div className={styles.post__comments}>
            <FontAwesomeIcon icon={faMessage} /> 
            <span style={{fontSize: "12px", paddingLeft: "5px", marginBottom: "2px"}}>{commentAmount}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;
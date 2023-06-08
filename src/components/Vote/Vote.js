import styles from './Vote.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Vote = () => {
  return (
    <div className={styles.vote}>
      <button className={styles.vote__button}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <div className={styles.vote__amount}>34</div>
      <button className={styles.vote__button}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  )
};

export default Vote;

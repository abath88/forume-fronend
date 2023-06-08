import styles from './MainMenu.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons';

const MainMenu = () => {
  return(
    <div className={styles.menu}>
      <p className={styles.menu__name}>MENU</p>
      <ul className={styles.menu__list}>
        <li className={clsx(styles.menu__item, styles.active)}>
          <div className={styles.menu__icon}>
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <a>Home</a>
        </li>
        <li className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <FontAwesomeIcon icon={faCompass} />
          </div>
          <a>Explore Topics</a>
        </li>
        <li className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <FontAwesomeIcon icon={faQuestion} />          
          </div>
          <a>My Topics</a>
        </li>
        <li className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <FontAwesomeIcon icon={faMessage} /> 
          </div>
          <a>My Answers</a>
        </li>
      </ul>
    </div>
  )
};

export default MainMenu;
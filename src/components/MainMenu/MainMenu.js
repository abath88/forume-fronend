import styles from './MainMenu.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { isAction } from '@reduxjs/toolkit';

const MainMenu = () => {
  return(
    <div className={styles.menu}>
      <p className={styles.menu__name}>MENU</p>
      <ul className={styles.menu__list}>
        <NavLink to="/">
        {({ isActive, isPending }) => (
          <li className={clsx(styles.menu__item, isActive && styles.active)}>
            <div className={styles.menu__icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span>Home</span>
          </li>
        )}
        </NavLink>
        <NavLink end={true} to="/explore-topics">
        {({ isActive, isPending }) => (
          <li className={clsx(styles.menu__item, isActive && styles.active)}>
            <div className={styles.menu__icon}>
              <FontAwesomeIcon icon={faCompass} />
            </div>
            <span>Explore Topics</span>
          </li>
        )}
        </NavLink>
        <NavLink to="/my-topics">
        {({ isActive, isPending }) => (
          <li className={clsx(styles.menu__item, isActive && styles.active)}>
            <div className={styles.menu__icon}>
              <FontAwesomeIcon icon={faQuestion} />          
            </div>
            <span>My Topics</span>
          </li>
        )}
        </NavLink>
        <NavLink to="/my-answers">
        {({ isActive, isPending }) => (
          <li className={clsx(styles.menu__item, isActive && styles.active)}>
            <div className={styles.menu__icon}>
              <FontAwesomeIcon icon={faMessage} /> 
            </div>
            <span>My Answers</span>
          </li>
        )}
        </NavLink>
      </ul>
    </div>
  )
};

export default MainMenu;
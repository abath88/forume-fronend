import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}><Link className={styles.logo__link} to="/">foru<span className={styles.logo__accent}>me</span></Link></div>
  )
}

export default Logo
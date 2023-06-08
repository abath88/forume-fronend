import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>foru<span className={styles.logo__accent}>me</span></div>
  )
}

export default Logo
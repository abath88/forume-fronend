import styles from './ContainerCenter.module.scss';

const ContainerCenter = ({ children }) => {
  return (
    <div className={styles.container}>{ children }</div>
  )
};

export default ContainerCenter;
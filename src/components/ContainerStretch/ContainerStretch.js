import styles from './ContainerStretch.module.scss';

const ContainerStretch = ({ children }) => {
  return (
    <div className={styles.container}>{ children }</div>
  )
};

export default ContainerStretch;
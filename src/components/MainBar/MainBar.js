import styles from "./MainBar.module.scss";

const MainBar = ({ width, children }) => {
    return (
        <div className={styles.mainbar}>{children}</div>
    )
};

export default MainBar;
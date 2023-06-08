import styles from "./Sidebar.module.scss";

const Sidebar = ({ width, children }) => {
    return (
        <div className={styles.sidebar}>{children}</div>
    )
};

export default Sidebar;
import styles from './Panel.module.scss';

const Panel = ({ children, sticky }) => {
    return(
        <div className={styles.panel} style={{position: `${sticky ? 'sticky' : 'static'}`}}>
            { children }
        </div>
    )
};

export default Panel;
import styles from './Profile.module.scss';
import avatar from '../../avatar-default.gif';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={avatar} alt="Avatar" className={styles.profile__avatar} />
        </div>
    )
};

export default Profile;
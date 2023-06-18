import styles from './Profile.module.scss';
import avatar from '../../avatar-default.gif';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Link to="/signin"><img src={avatar} alt="Avatar" className={styles.profile__avatar} /></Link>
        </div>
    )
};

export default Profile;
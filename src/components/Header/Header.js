import Container from '../ContainerCenter/ContainerCenter';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';

import styles from './Header.module.scss';

const Header = () => {
  return(
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <Logo />
          <Search />
          <Profile />
        </div>
      </Container>
    </header>
  )
};

export default Header;
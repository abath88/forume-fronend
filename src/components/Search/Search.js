import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
  return (
    <div className={styles.search}>
      <input placeholder='Search for Topics' className={styles.search__input} /> 
      <div className={styles.search__icon}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}

export default Search;
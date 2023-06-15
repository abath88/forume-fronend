import styles from './SignIn.module.scss';
import Panel from '../Panel/Panel';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../redux/slice/authSlice';

const SignIn = () => {
  /*const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )*/
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({username, password}))
  }

  return (
    <Panel>
      <div className={styles.form} onSubmit={handleSubmit}>
        <form>
          <input 
            name="username" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            name="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="sigup" />
        </form>
      </div>
    </Panel>
  )
}

export default SignIn;
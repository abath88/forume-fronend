import styles from './SignUp.module.scss';
import Panel from '../Panel/Panel';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slice/authSlice';

const SignUp = () => {
  /*const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )*/
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMail(prev => prev.toLowerCase());
    dispatch(registerUser({username, mail, password}))
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
            name="mail" 
            type="email" 
            value={mail} 
            onChange={(e) => setMail(e.target.value)}
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

export default SignUp;
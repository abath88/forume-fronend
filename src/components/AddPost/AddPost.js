import styles from './AddPost.module.scss';
import Panel from '../Panel/Panel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/slice/postSlice';

const AddPost = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({title, text}))
  }

  return (
    <Panel>
      <div className={styles.form} onSubmit={handleSubmit}>
        <form>
          <input 
            name="title" 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <input 
            name="text" 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="add post" />
        </form>
      </div>
    </Panel>
  )
}

export default AddPost;
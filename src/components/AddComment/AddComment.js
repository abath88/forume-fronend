import styles from './AddComment.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/slice/postSlice';

const AddComment = ({id}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({text, postId: id}));
  }

  return (
      <div className={styles.form} onSubmit={handleSubmit}>
        <form>
          <input 
            name="text" 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="add post" />
        </form>
      </div>
  )
}

export default AddComment;
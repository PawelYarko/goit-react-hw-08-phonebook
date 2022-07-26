import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../../../../redux/todos-reducer/todos-operations';
import { getVisibleContacts } from '../../../../redux/todos-reducer/todos-selectors';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className={s.listItem}>
          {name}: {phone}
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => dispatch(removeTodo(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
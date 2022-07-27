import { useSelector } from 'react-redux';
import { useDeleteContactsMutation, useFetchContactsQuery } from '../../../../redux/notes-contacts/notes-slice';
import { getFilter } from '../../../../redux/notes-contacts/notes-selectors';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();
  const filter = useSelector(getFilter);
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {data && visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          {name}: {number}
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
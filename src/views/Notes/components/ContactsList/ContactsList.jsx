import { useSelector } from 'react-redux';
import { useDeleteContactsMutation, useFetchContactsQuery } from '../../../../redux/notes-contacts/notes-slice';
import { getFilter } from '../../../../redux/notes-contacts/notes-selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
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
          <Button 
          className={s.buttonDelete}
          type="button"
          onClick={() => deleteContact(id)}
          variant="outlined" 
          startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
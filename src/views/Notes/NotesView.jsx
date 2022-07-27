import { useSelector } from 'react-redux';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { getStatus, getError } from '../../redux/todos-reducer/todos-selectors';
import s from './NotesView.module.css';


export default function NotesView(){
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    console.log('Notes live')
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <Form />
        <div>
          <h2>Contacts</h2>
          <Filter />
          {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}
          <ContactsList />
        </div>
      </div>
    );
}
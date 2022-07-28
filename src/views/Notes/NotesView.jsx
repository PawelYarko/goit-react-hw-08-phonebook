import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import s from './NotesView.module.css';


export default function NotesView(){
    return (
      <div className={s.container}>
        <Form />
        <div className={s.cotactsList}>
          <Filter />
          <ContactsList />
        </div>
      </div>
    );
}
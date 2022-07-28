import { useSelector } from 'react-redux';
import { useDeleteContactsMutation, useFetchContactsQuery } from '../../../../redux/notes-contacts/notes-slice';
import { getFilter } from '../../../../redux/notes-contacts/notes-selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

  return (<> 
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleContacts.map(({ id, name, number }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{name}</TableCell>
              <TableCell align="left">{number}</TableCell>
              <Button 
                className={s.buttonDelete}
                type="button"
                onClick={() => deleteContact(id)}
                variant="outlined" 
                startIcon={<DeleteIcon />}>
                  Delete
              </Button>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
      {/* <TableRow></TableRow> */}
          
          </>
  );
};

export default ContactsList;
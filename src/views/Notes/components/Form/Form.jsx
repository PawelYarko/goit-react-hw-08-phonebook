import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useCreateContactsMutation, useFetchContactsQuery } from '../../../../redux/notes-contacts/notes-slice';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();

  const [createContact] = useCreateContactsMutation();

  const handleChangeName = e => setName(e.currentTarget.value);

  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  const onContactAdd = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkName = name => {
      return data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    checkName(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : createContact(contact) && clearInput();
    
  };

  const clearInput = () => {
    setName('');
    setNumber('');
  }

  return (
    <form className={s.form} onSubmit={onContactAdd}>
      <TextField
        className={s.inputName}
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        className={s.inputNumber}
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button 
      type="submit" 
      className={s.button}
      variant="contained" 
      endIcon={<SendIcon />}
      >
      Add contact
      </Button>
    </form>
  );
}
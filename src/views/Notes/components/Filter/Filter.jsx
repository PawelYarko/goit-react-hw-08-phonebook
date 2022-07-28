import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../../redux/notes-contacts/notes-filter';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const normalizedFilter = e.target.value.toLowerCase();
    dispatch(changeFilter(normalizedFilter));
  };

  return (
    <div>
      <TextField
        className={s.input}
        type="text" 
        name="filter" 
        onChange={onFilterChange}
        id="input-with-icon-textfield"
        sx={{mt:1, ml:5}}
        InputProps={{
          startAdornment: (
            <InputAdornment 
            position="start"
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};

export default Filter;
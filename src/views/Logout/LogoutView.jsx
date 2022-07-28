import { useDispatch, useSelector } from 'react-redux';
import { getUsername }  from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import s from './LogoutView.module.css';

export default function LogOutView(){

    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return(
        <div className={s.container}>
        <p className={s.user}>
        <Avatar sx={{ bgcolor: deepOrange[500], mr:1 }}>{name.toUpperCase().slice(0, 1)}</Avatar>
        {name}
        </p>
        <Button 
        onClick={() => dispatch(logOut())}
        variant="outlined" 
        type="submit" 
        className={s.button}
        sx={{
          ml: 1,
          mr: 1
        }}
        >
          Log Out
        </Button>
        </div>
    );
}
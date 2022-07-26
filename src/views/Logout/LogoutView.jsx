import { useDispatch, useSelector } from 'react-redux';
import { getUsername }  from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import s from './LogoutView.module.css';

export default function LogOutView(){

    const dispatch = useDispatch();
    const name = useSelector(getUsername);
    console.log(name)

    return(
        <div className={s.container}>
        <p>Wellcome, {name}</p>
        <button type="submit" onClick={() => dispatch(logOut())}>Выйти</button>
        </div>
    );
}
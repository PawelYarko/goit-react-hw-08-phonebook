import { useDispatch, useSelector } from 'react-redux';
import { getUsername }  from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';


export default function LogOutView(){

    const dispatch = useDispatch();
    const name = useSelector(getUsername);
    console.log(name)

    return(
        <>
        <h1>Contacts</h1>
        <p>Wellcome, {name}</p>
        <button type="submit" onClick={() => dispatch(logOut())}>Выйти</button>
        </>
    );
}
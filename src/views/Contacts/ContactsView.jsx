import { useDispatch, useSelector } from 'react-redux';
import authSelectors  from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';


export default function ContactsView(){

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return(
        <>
        <h1>Contacts</h1>
        <p>Wellcome, {name}</p>
        <button type="submit" onClick={() => dispatch(logOut())}>Выйти</button>
        </>
    );
}
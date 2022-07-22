

export default function LoginView(){
    return(
        <>
        <form>
            <label>
                Почта: 
                <input type="email" />
            </label>
            <label>
                Пароль:
                <input type="password" />
            </label>
            <button type="submit">Отправить</button>
        </form>
        </>
    );
}
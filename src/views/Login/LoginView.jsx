

export default function LoginView(){
    return(
        <>
        <h1>Login</h1>
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
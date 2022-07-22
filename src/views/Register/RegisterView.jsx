

export default function RegisterView (){
    return(
        <>
        <form>
            <label>
                Имя: 
                <input type="name" />
            </label>
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
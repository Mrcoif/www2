import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../auth/AuthContext";

const LoginPage = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const fromPage = location.state?.from?.pathname || '/posts'

    const loginUser = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        navigate(fromPage)
    }

    return (
        <div>
            <h1>Войти</h1>
            <form onSubmit={loginUser}>
                    <MyInput
                        // value={login}
                        // onChange={e => {setLogin(e.target.value)}}
                        type={"text"}
                        placeholder={"Введите логин"}
                    />
                    <MyInput
                        // value={password}
                        // onChange={e => {setPassword(e.target.value)}}
                        type={"password"}
                        placeholder={"Введите пароль"}
                    />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;
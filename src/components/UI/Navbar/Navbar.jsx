import React, {useContext} from 'react';
import classes from './Navbar.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../auth/AuthContext";

const Navbar = () => {

    const navigate = useNavigate()
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const loginFunc = () => {
        navigate('/login')
    }

    const logoutFunc = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <header className={classes.navbar}>
            <div className={classes.navbar__links}>
                <NavLink className={classes.navbar__links__link} to={'/about'}>О сайте</NavLink>
                <NavLink className={classes.navbar__links__link} to={'/posts'}>Посты</NavLink>
            </div>
            <div className={classes.navbar__loginout}>
                {isAuth
                    ? <MyButton onClick={logoutFunc}>Выйти</MyButton>
                    : <MyButton onClick={loginFunc}>Войти</MyButton>
                }
            </div>
        </header>
    );
};

export default Navbar;
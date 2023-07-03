import React from 'react';
import MyButton from "../components/UI/button/MyButton"
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
    <div>
        <h1 styles={{color: 'red'}}>Страница не найдена</h1>
        <MyButton onClick={() => {navigate('/posts')}}>Прейти на страницу постов</MyButton>
    </div>
    );
};

export default NotFoundPage;
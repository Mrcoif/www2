import React, {useEffect, useState} from "react";
import './styles/App.css'
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./auth/AuthContext";

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [isLoadingIsAuth,  setIsLoadingIsAuth] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoadingIsAuth(false)
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoadingIsAuth}}>
            <div className={'App'}>
                <AppRouter/>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
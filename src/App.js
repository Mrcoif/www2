import React from "react";
import './styles/App.css'
import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyHeader from "./components/UI/MyHeader/MyHeader";
function App() {
    return(
        <>
            <MyHeader/>
            <Routes>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/posts"} element={<Posts/>}/>
                <Route path={"*"} element={<h1>Page not found</h1>}/>
            </Routes>
        </>
    )
}

export default App;
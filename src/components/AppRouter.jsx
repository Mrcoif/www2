import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../auth/RequireAuth";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={"about"} element={<About/>}/>
                <Route path={"login"} element={<LoginPage/>}/>
                <Route exact path={"posts"} element={<Posts/>}/>
                <Route exact path={"posts/:id"} element={<RequireAuth><PostIdPage/></RequireAuth>}/>
                <Route index element={<NotFoundPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
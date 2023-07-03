import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Layout;
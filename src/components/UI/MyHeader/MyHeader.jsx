import React from 'react';
import classes from './MyHeader.module.css'

const MyHeader = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <a href={'/about'}>О сайте</a>
                <a href={'/posts'}>Посты</a>
            </div>
        </div>
    );
};

export default MyHeader;
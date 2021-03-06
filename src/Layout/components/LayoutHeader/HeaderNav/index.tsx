import React from 'react';
import {Menu, Search, Write, Notification, AvatarMenu} from './components';
import './index.less';

const HeaderNav: React.FC = () => {

    return (
        <article className='header-nav'>
            <section className="nav-item" style={{padding: 0}}><Menu /></section>
            <section className="nav-item search"><Search /></section>
            <section className="nav-item"><Write /></section>
            <section className="nav-item"><Notification /></section>
            <section className="nav-item" style={{paddingRight: 0}}><AvatarMenu /></section>
        </article>
    );
};

export default HeaderNav;

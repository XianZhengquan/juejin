import React from 'react';
import HeaderNav from './HeaderNav';
import LogoSvg from 'assets/images/logo/logo.svg';
import './index.less';

const LayoutHeader: React.FC = () => {

    return (
        <article className='layout-header-container'>
            <section className="logo">
                <img src={LogoSvg} alt="logo" />
            </section>
            <section className="nav-wrap">
                <HeaderNav />
            </section>
        </article>
    );
};

export default LayoutHeader;

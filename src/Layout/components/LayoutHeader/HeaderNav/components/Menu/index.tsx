import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './index.less';

const Menu: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    // 当前路由
    const [activePath, setActivePath] = useState('/home');

    // 跳转路由
    function toPush(path: string): void {
        history.push(path);
    }

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <ul className='menu'>
            <li className={['menu-item', activePath.includes('/home') && 'active'].join(' ').trim()}
                onClick={() => toPush('/home/recommended')}>首页
            </li>
            <li className={['menu-item', activePath.includes('/pins') && 'active'].join(' ').trim()}
                onClick={() => toPush('/pins/recommended')}>沸点
            </li>
            <li className={['menu-item', activePath.includes('/topics') && 'active'].join(' ').trim()}
                onClick={() => toPush('/topics')}>话题
            </li>
            <li className={['menu-item', activePath.includes('/books') && 'active'].join(' ').trim()}
                onClick={() => toPush('/books/all')}>小册
            </li>
            <li className={['menu-item', activePath.includes('/events') && 'active'].join(' ').trim()}
                onClick={() => toPush('/events/all')}>活动
            </li>
        </ul>
    );
};

export default Menu;

import React, {useEffect, useRef, useState} from 'react';
import {LayoutHeader, MainHeader} from './components';
import './index.less';

const ILayout: React.FC = ({children}: any) => {
    // 滚动的值
    const [scrollValue, setScrollValue] = useState(0);
    // 上次、当前滚动的值
    const prevScrollValue = useRef(0);
    const [translateValue, setTranslateValue] = useState(0);

    useEffect(() => {
        let currScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setScrollValue(currScrollTop);
        prevScrollValue.current = currScrollTop;
        window.onscroll = function () {
            // 滚动的值
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollValue(scrollTop);
            setTimeout(() => {
                prevScrollValue.current = scrollTop;
            }, 0);
        };
    }, []);

    useEffect(() => {
        if ((scrollValue > 200) && (prevScrollValue.current <= scrollValue)) {
            setTranslateValue(-60);
        } else {
            setTranslateValue(0);
        }
    }, [scrollValue]);

    return (
        <article className='layout'>
            <header className="layout-header" style={{transform: `translateY(${translateValue}px)`}}>
                <LayoutHeader />
            </header>
            <main className="layout-main">
                <header className="layout-main-header" style={{transform: `translateY(${translateValue + 60}px)`}}>
                    <MainHeader />
                </header>
                <article className="layout-main-container">
                    {children}
                    <p>开始</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>结束</p>
                </article>
            </main>
            <footer className='layout-footer'>
                footer
            </footer>
        </article>
    );
};

export default ILayout;

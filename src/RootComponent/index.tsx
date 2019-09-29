import React from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import IRouter from 'Router';

const RootComponent: React.FC = () => {

    return (
        <article className='root-component'>
            <ConfigProvider locale={zhCN}
                            getPopupContainer={(trigger: any) => {
                                if (!trigger) return document.body;
                                return trigger.parentNode;
                            }}>
                <IRouter />
            </ConfigProvider>
        </article>
    );
};

export default RootComponent;

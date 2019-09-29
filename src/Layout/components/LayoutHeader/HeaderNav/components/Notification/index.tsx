import React from 'react';
import {Icon} from 'antd';
import './index.less'

const Notification: React.FC = () => {

    return (
        <article className='notification' style={{fontSize: '20px'}}>
            <Icon type="bell" theme="filled" />
        </article>
    );
};

export default Notification;

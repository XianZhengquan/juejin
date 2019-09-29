import React from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';

const Write: React.FC = () => {

    return (
        <article className='write'>
            <Dropdown trigger={['click']}
                      overlay={<Menu>
                          <Menu.Item>发布沸点</Menu.Item>
                          <Menu.Item>分享连接</Menu.Item>
                      </Menu>}>
                <Button type='primary'>
                    写文章 <Icon type="down" />
                </Button>
            </Dropdown>
        </article>
    );
};

export default Write;

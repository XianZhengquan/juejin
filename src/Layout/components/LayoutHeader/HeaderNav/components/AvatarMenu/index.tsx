import React from 'react';
import {Avatar, Dropdown, Menu, Icon} from 'antd';
import './index.less';

const AvatarMenu: React.FC = () => {

    return (
        <article className='avatar-menu'>
            <Dropdown trigger={['click']}
                      overlay={<Menu>
                          <Menu.Item>
                              <Icon type="user" />
                              <span>写文章</span>
                          </Menu.Item>
                          <Menu.Item>
                              <Icon type="user" />
                              <span>草稿</span>
                          </Menu.Item>
                          <Menu.Divider />
                          <Menu.Item>
                              <Icon type="user" />
                              <span>我的主页</span>
                          </Menu.Item>
                      </Menu>}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{cursor: 'pointer'}} />
            </Dropdown>
        </article>
    );
};

export default AvatarMenu;

import React from 'react';
import {Avatar, Dropdown, Menu, Icon} from 'antd';
import './index.less';

interface DropdownMenusProps {
    title: string,
    icon?: string,
    type: string,
    children?: Array<DropdownMenusProps>
}

const AvatarMenu: React.FC = () => {

    //
    const menus: Array<DropdownMenusProps> = [
        {
            title: '写文章',
            icon: 'edit',
            type: 'menu'
        },
        {
            title: '草稿',
            icon: 'file',
            type: 'menu'
        },
        {
            title: '',
            icon: '',
            type: 'divider'
        },
        {
            title: '我的主页',
            icon: 'user',
            type: 'menu'
        },
        {
            title: '我赞过的',
            icon: 'like',
            type: 'menu'
        },
        {
            title: '我的收藏集',
            icon: 'star',
            type: 'menu'
        },
        {
            title: '已购',
            icon: 'shopping-cart',
            type: 'menu'
        },
        {
            title: '标签管理',
            icon: 'tag',
            type: 'menu'
        },
        {
            title: '',
            icon: '',
            type: 'divider'
        },
        {
            title: '设置',
            icon: 'setting',
            type: 'menu'
        },
        {
            title: '关于',
            icon: 'info-circle',
            type: 'menu',
            children: [
                {
                    title: '下载应用',
                    type: 'menu'
                },
                {
                    title: '关于',
                    type: 'menu'
                },
                {
                    title: '加入我们',
                    type: 'menu'
                },
                {
                    title: '翻译计划',
                    type: 'menu'
                },
                {
                    title: '合作伙伴',
                    type: 'menu'
                }
            ]
        },
        {
            title: '',
            icon: '',
            type: 'divider'
        },
        {
            title: '登出',
            icon: 'logout',
            type: 'menu'
        }
    ];

    // 渲染下拉菜单
    function renderDropdownMenu(data: Array<DropdownMenusProps>): React.ReactNode {
        return data.map((item, i) => {
            if (item.children) return <Menu.SubMenu key={i}
                                                    title={<span>
                                                        <Icon type={item.icon} className='mr8' />
                                                        <span>{item.title}</span>
                                                    </span>}>{renderDropdownMenu(item.children)}</Menu.SubMenu>;
            if (item.type === 'divider') return <Menu.Divider key={i} />;
            return <Menu.Item key={i}>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
            </Menu.Item>;
        });
    }

    return (
        <article className='avatar-menu'>
            <Dropdown trigger={['click']}
                      overlay={<Menu>
                          {renderDropdownMenu(menus)}
                      </Menu>}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{cursor: 'pointer'}} />
            </Dropdown>
        </article>
    );
};

export default AvatarMenu;

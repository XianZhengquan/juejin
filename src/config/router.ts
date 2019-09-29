interface RouterProps {
    path: string,
    menuId: string,
    title: string,
    component: string,
    children?: Array<RouterProps>
}

const routerConf: Array<RouterProps> = [
    {
        path: '/home/:labelType',
        title: '首页',
        menuId: 'home',
        component: 'home'
    },
    {
        path: '/pins/:pinsType',
        title: '沸点',
        menuId: 'pins',
        component: 'pins'
    },
    {
        path: '/topics',
        title: '话题',
        menuId: 'topics',
        component: 'topics'
    },
    {
        path: '/books/:labelType',
        title: '小册',
        menuId: 'books',
        component: 'books'
    },
    {
        path: '/events/:city',
        title: '活动',
        menuId: 'events',
        component: 'events'
    }
];

export default routerConf;

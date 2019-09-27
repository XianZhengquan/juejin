import React from 'react';
import {HashRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';
import ILayout from 'Layout';
import TweenOne from 'rc-tween-one';
import loadable from '@loadable/component';

// Route 的接口
interface RouteComponentInterface extends RouteComponentProps {
    pagePath: string,
    menuId?: string
}

// lazy 的 组件
const RouteComponent = loadable((props: RouteComponentInterface) => import(`./../views/${props.pagePath}`), {
    fallback: <div>loading...</div>
});

// 动效的props
const tweenOneProps = {
    style: {opacity: 0, height: '100%'},
    animation: {opacity: 1},
    component: 'article'
};

const IRouter: React.FC = () => {
    return (
        <HashRouter>
            <ILayout>
                <Switch>
                    <Route exact={true}
                           path='/'
                           key='home'
                           render={props => <TweenOne {...tweenOneProps}>
                               <RouteComponent {...props} pagePath='Home' />
                           </TweenOne>} />
                    <Route path='/about'
                           key='about'
                           render={props => <TweenOne {...tweenOneProps}>
                               <RouteComponent {...props} pagePath='About' />
                           </TweenOne>} />
                </Switch>
            </ILayout>
        </HashRouter>
    );
};

export default IRouter;

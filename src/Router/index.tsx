import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom';
import {Error_404} from 'components';
import ILayout from 'Layout';
import TweenOne from 'rc-tween-one';
import loadable from '@loadable/component';
import routerConf from 'config/router';
import {cloneDeep} from 'lodash-es';

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
        <BrowserRouter>
            <ILayout>
                <Switch>
                    <Route path='/' exact={true} key='/' render={props => <Redirect to='/home/recommended' />} />
                    {
                        cloneDeep(routerConf).map(item => (<Route path={item.path}
                                                                  key={item.menuId}
                                                                  render={props => <TweenOne {...tweenOneProps}>
                                                                      <RouteComponent {...props}
                                                                                      pagePath={item.component} />
                                                                  </TweenOne>} />))
                    }
                    <Route component={Error_404} />
                </Switch>
            </ILayout>
        </BrowserRouter>
    );
};

export default IRouter;

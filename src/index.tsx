import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import * as serviceWorker from './serviceWorker';
import 'assets/styles/index.less';

ReactDOM.render(<RootComponent />, document.getElementById('root'));

serviceWorker.unregister();

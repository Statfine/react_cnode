/**
 * Created by eastiming on 16/8/3.
 * reducers 状态值和数据
 * redux-logger 开发环境下log输出
 * app 用connet链接reducer里面的application数据和action里面的方法
 * action触发application里面的状态改变数据
 */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import appReducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { api } from './middleware';

import 'normalize.css'; //重置浏览器默认样式
import 'flex-css-layout'; //flex布局
//import './Iconfont/iconfont.css'; //字体图标

import App from './containers/App';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage/User';
import MessagePage from './containers/MessagePage';
import ReportPage from './containers/ReportPage';
import NoPage from './containers/404';

const routerMdw = routerMiddleware(browserHistory);
let store = createStore(
  appReducers,
  compose(
    applyMiddleware(thunk, api, routerMdw),
    applyMiddleware(createLogger())
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="User" component={UserPage}/>
        <Route path="ReportPage" component={ReportPage}/>
        <Route path="MessagePage" component={MessagePage}/>
      </Route>
      <Route path="*" component={NoPage} />
    </Router>
  </Provider>,
  document.getElementById('app')
)

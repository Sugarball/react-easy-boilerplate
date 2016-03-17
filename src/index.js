import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
import "babel-polyfill";

const history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Router history={history}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>,
    document.getElementById('root')
);

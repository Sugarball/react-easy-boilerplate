import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'components/App';
import { Home } from 'components/Home';
import { Video } from 'components/Video';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="video" component={Video} />
    <Route status={404} path="*" component={Home} />
  </Route>
);

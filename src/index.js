import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles.scss';
import List from './list/list';
import User from './about/about';

import configureStore from './configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route exact path="/about/:login" component={User} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app-ghapi')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configStore from 'Redux/store';
import AppDevtools from 'App/Devtools';
import AppRouter from 'App/Router';

const store = configStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

let rootElement = document.createElement('div');

rootElement.id = 'app';
document.body.appendChild(rootElement);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppRouter history={history} />
      <AppDevtools />
    </div>
  </Provider>,
  document.getElementById('app')
);

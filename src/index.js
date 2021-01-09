import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';

import store from './redux/store';
// import { actionAdd } from './redux/actions';

// console.log(store);
// console.log(store.dispatch(actionAdd('my super payload')));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

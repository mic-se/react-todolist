import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import todoStore from './TodoStore';

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

module.hot.accept();

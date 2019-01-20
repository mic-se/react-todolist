import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import todoStore from './TodoStore';

ReactDOM.render(
  <Provider store={todoStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}

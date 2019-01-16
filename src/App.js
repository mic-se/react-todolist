import React from 'react';
import { Router, Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import history from './history';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import './App.css';

@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="task-container">
        <Router history={history}>
          <div>
            <Route path="/" exact component={TodoList} />
            <Route path="/create" exact component={TodoCreate} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

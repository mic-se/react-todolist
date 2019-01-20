import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import TodoEdit from './TodoEdit';
import './App.css';

@inject('store')
@withRouter
@observer
class App extends React.Component {
  render() {
    return (
      <div className="task-container">
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/create" exact component={TodoCreate} />
          <Route path="/edit/:id" exact component={TodoEdit} />
        </div>
      </div>
    );
  }
}

export default App;

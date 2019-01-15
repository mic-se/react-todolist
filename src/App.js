import React from 'react';
import { observer, inject } from 'mobx-react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import './App.css';

@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="task-container">
        <TodoCreate />
        <hr />
        <TodoList />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import TodoListItem from './TodoListItem';

@inject('store')
@observer
class TodoList extends React.Component {
  renderItems() {
    const { store } = this.props;
    const { items } = store;

    return items.map((item) => {
      return <TodoListItem key={item.id} item={item} />;
    });
  }

  render() {
    const { store } = this.props;
    const { countCompletedTasks, countTotalTasks } = store;
    return (
      <div>
        <Link to="/create">
          <button type="button" className="ui button primary">Create</button>
        </Link>
        <h2>Todo List</h2>
        <table className="ui fixed table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Done?</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>

        <span>
          {countCompletedTasks}
/
          {countTotalTasks}
        </span>
      </div>
    );
  }
}

export default TodoList;
